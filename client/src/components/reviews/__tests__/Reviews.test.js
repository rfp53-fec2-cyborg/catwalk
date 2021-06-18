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
import RatingFilterDesc from '../RatingFilterDesc.jsx';
import Recommended from '../Recommended.jsx';
import Sorting from '../Sorting.jsx';
import ProductBreakdown from '../ProductBreakdown.jsx';
import Characteristic from '../Characteristic.jsx';

import { reviews } from '../../../../mock-data/reviews.js';
import { reviewsMeta } from '../../../../mock-data/reviewsMeta.js';
import ModalPhoto from '../ModalPhoto.jsx';
import Modal from '../../shared/Modal.jsx';

import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import intersectionObserverMock from '../../../../../__mocks__/intersectionObserverMock';

it ('Reviews component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews reviews={reviews} reviewsMeta={reviewsMeta}/>, div);
});

it ('ReviewList component renders without crashing', () => {
  const div = document.createElement('div');
  const props = {data: {reviews, reviewsMeta}, ratingFilter: []};
  const sortedListOfReviews = [];
  ReactDOM.render(<ReviewList props={props} sortedListOfReviews={sortedListOfReviews}/>, div);
});


it ('ReviewListEntry component renders without crashing', () => {
  const div = document.createElement('div');
  const review = {
    'review_id': 406625,
    'rating': 5,
    'summary': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'recommend': true,
    'response': null,
    'body': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'date': '2021-06-06T00:00:00.000Z',
    'reviewer_name': 'bob',
    'helpfulness': 0,
    'photos': [
      {
        'id': 730659,
        'url': 'https://i.imgur.com/R2UqMBy.jpg'
      }
    ]
  };
  ReactDOM.render(<ReviewListEntry review={review} />, div);
});

it ('ModalPhoto component renders without crashing', () => {
  const div = document.createElement('div');
  const testUrl = {url: ''};
  ReactDOM.render(<ModalPhoto url={testUrl.url}/>, div);
});

it ('RatingBar component renders without crashing', () => {
  const div = document.createElement('div');
  const ratingCount = 2;
  const ratingOverview = 2;
  ReactDOM.render(<RatingBar ratingCount={ratingCount} ratingOverview={ratingOverview} />, div);
});

it ('RatingBreakdown component renders without crashing', () => {
  const div = document.createElement('div');
  const data = {reviews, reviewsMeta};
  ReactDOM.render(<RatingBreakdown data={data}/>, div);
});

it ('Sorting component renders without crashing', () => {
  const div = document.createElement('div');
  const data = {reviews, reviewsMeta};
  const ratingFilter = [];
  ReactDOM.render(<Sorting data={data} ratingFilter={ratingFilter}/>, div);
});


it ('RatingFilterDesc component renders without crashing', () => {
  const div = document.createElement('div');
  const data = [5, 4, 3, 2, 1];
  ReactDOM.render(<RatingFilterDesc data={data}/>, div);
});



it ('Recommended component renders without crashing', () => {
  const div = document.createElement('div');
  const recommendedData = {
    'false': '9',
    'true': '25'
  };
  ReactDOM.render(<Recommended recommendedData={recommendedData}/>, div);
});

it ('ProductBreakdown component renders without crashing', () => {
  const data = {reviews, reviewsMeta};
  render(
    <ProductBreakdown data={data}/>
  );

  expect(screen.getByText('Size'));
  expect(screen.getByText('Width'));
  expect(screen.getByText('Comfort'));
  expect(screen.getByText('Quality'));
  expect(screen.getByAltText('downArrow_57235'));
  expect(screen.getByAltText('downArrow_57236'));
  expect(screen.getByAltText('downArrow_57237'));
  expect(screen.getByAltText('downArrow_57238'));
});

it('ProductBreakdown matches snapshot', () => {
  const data = {reviews, reviewsMeta};
  const tree = renderer
    .create(<ProductBreakdown data={data}>Facebook</ProductBreakdown>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});