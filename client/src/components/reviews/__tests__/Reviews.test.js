/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from '../Reviews.jsx';
import ReviewList from '../Reviews.jsx';
import { render } from '@testing-library/react';

it ('Reviews renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews />, div);
});

it ('Review list renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewList />, div);
});