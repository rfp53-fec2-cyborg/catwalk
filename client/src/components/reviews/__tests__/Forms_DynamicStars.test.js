/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import AddReviews from '../AddReviews.jsx';

import DrawDynamicStars from '../review_form/02_DrawDynamicStars.jsx';

import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';


it ('Dynamic stars render without crashing', () => {
  render(<DrawDynamicStars />);
});

test('Ratings can be changed with appropriate grading description', async () => {
  const relatedStarRating = {
    '1': 'Poor',
    '2': 'Fair',
    '3': 'Average',
    '4': 'Good',
    '5': 'Great'
  };
  const handleOnChange = () => {};

  render(<DrawDynamicStars handleOnChange={handleOnChange}/>);

  await userEvent.click(document.getElementById('unfilled-star-1'));
  expect(screen.getByTestId('grading-description')).toHaveTextContent(/poor/i);

  await userEvent.click(document.getElementById('unfilled-star-2'));
  expect(screen.getByTestId('grading-description')).toHaveTextContent(/fair/i);

  await userEvent.click(document.getElementById('unfilled-star-3'));
  expect(screen.getByTestId('grading-description')).toHaveTextContent(/average/i);

  await userEvent.click(document.getElementById('unfilled-star-4'));
  expect(screen.getByTestId('grading-description')).toHaveTextContent(/good/i);

  await userEvent.click(document.getElementById('unfilled-star-5'));
  expect(screen.getByTestId('grading-description')).toHaveTextContent(/great/i);

  await userEvent.click(document.getElementById('filled-star-3'));
  expect(screen.getByTestId('grading-description')).toHaveTextContent(/average/i);

  await userEvent.click(document.getElementById('filled-star-1'));
  expect(screen.getByTestId('grading-description')).toHaveTextContent(/poor/i);

});

test('Images of stars are correctly displayed', async () => {

  const handleOnChange = () => {};

  render(<DrawDynamicStars handleOnChange={handleOnChange}/>);

  await userEvent.click(document.getElementById('unfilled-star-1'));
  expect(screen.getByRole('img', {name: 'filled-star-1'})).toBeDefined();
  expect(screen.getByRole('img', {name: 'unfilled-star-2'})).toBeDefined();
  expect(screen.getByRole('img', {name: 'unfilled-star-3'})).toBeDefined();
  expect(screen.getByRole('img', {name: 'unfilled-star-4'})).toBeDefined();
  expect(screen.getByRole('img', {name: 'unfilled-star-5'})).toBeDefined();
});
