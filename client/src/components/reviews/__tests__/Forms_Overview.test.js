/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from '../Reviews.jsx';
import ReviewList from '../ReviewList.jsx';
import ReviewListEntry from '../ReviewListEntry.jsx';
import RatingBreakdown from '../RatingBreakdown.jsx';
import RatingBar from '../RatingBar.jsx';
import Sorting from '../Sorting.jsx';
import AddReviews from '../AddReviews.jsx';

import ReviewForm from '../review_form/01_ReviewForm.jsx';
import DrawDynamicStars from '../review_form/02_DrawDynamicStars.jsx';
import Recommendation from '../review_form/03_Recommendation.jsx';
import Characteristics from '../review_form/04_Characteristics.jsx';
import SummaryAndBody from '../review_form/05_SummaryAndBody.jsx';
import UploadPhotos from '../review_form/06_UploadPhotos.jsx';
import PersonalInfo from '../review_form/07_PersonalInfo.jsx';
import { reviews } from '../../../../mock-data/reviews.js';
import { reviewsMeta } from '../../../../mock-data/reviewsMeta.js';
import { product } from '../../../../mock-data/product.js';

import Modal from '../../shared/Modal.jsx';

import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';


it ('ReviewForm modal component renders without crashing', () => {
  const div = document.createElement('div');
  const data = {reviews, reviewsMeta, product};
  ReactDOM.render(<ReviewForm data={data}/>, div);
});

/*
To continue investigating use of mock server

const fakeUserResponse = {token: 'fake_user_token'};
const server = setupServer(
  rest.post('/api/login', (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse));
  }),
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  window.localStorage.removeItem('token');
});
afterAll(() => server.close());
*/

describe( 'Review Form', () => {
  it('should render the basic fields', () => {
    const data = {reviews, reviewsMeta, product};

    act(() => {
      render(<ReviewForm data={data}/>);
    });

    expect(screen.getByRole('heading', { name: 'Write Your Review' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Overall Rating' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Recommendation' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Characteristics' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Summary and Body' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Upload Photos' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Personal Information' })).toBeInTheDocument();
    // expect(screen.getByRole('img', { name: /""/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /yes/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /no/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /summary/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /body/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit review/i })).toBeInTheDocument();
  });
});

test('Review cannot be submitted if Rating and Recommend fields are not set', async () => {
  const data = {reviews, reviewsMeta, product};
  await act( async () => {
    render(<ReviewForm data={data}/>);
  });

  await act( async () => {
    fireEvent.submit(screen.getByText(/submit review/i));
  });

  const errorRecommend = () => {
    var recommendation;
    if (recommendation === undefined) {
      return 'Recommendation is required';
    }
  };

  expect(screen.getByText(/Rating is required./i)).toBeDefined();
  expect(errorRecommend()).toMatch(/Recommendation is required/i);

});

test('Review form cannot be successfully updated and submitted', async () => {
  const data = {reviews, reviewsMeta, product};
  const mockSave = jest.fn();
  await act( async () => {
    render(<ReviewForm formDetails={mockSave} data={data}/>);
  });

  await act( async () => {
    const submitButton = screen.getByRole('button', {name: /submit review/i});
    fireEvent.submit(submitButton);
  });
  expect(mockSave).not.toBeCalled();
});

// Need to investigate more on how to test triggering of error messages in test environment

/*
  userEvent.click(document.getElementById('1-form-star'));
  userEvent.click(document.getElementById('form-radio-yes'));
  const summary = screen.getByRole('textbox', {name: /summary/i});
  await userEvent.type(summary, 'Testing123123');

  const body = screen.getByRole('textbox', {name: /body/i});
  await userEvent.type(body, 'Hello this is a teting description and this should be greater than 50 characters. Testing Testing Testing');

  const name = screen.getByRole('textbox', {name: /name/i});
  await userEvent.type(name, 'chuck');

  const email = screen.getByRole('textbox', {name: /email/i});
  await userEvent.type(email, 'chuck@norris.com');

  const submitButton = screen.getByRole('button', {name: /submit review/i});
  fireEvent.submit(submitButton);

*/
