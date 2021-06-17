/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal.jsx';
import StarRating from '../StarRating.jsx';

it ('Modal components renders without crashing', () => {
  const div = document.createElement('div');
  const content = (<></>);
  ReactDOM.render(<Modal props={content}/>, div);
});

it ('StarRating component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarRating score={'4.75'}/>, div);
});