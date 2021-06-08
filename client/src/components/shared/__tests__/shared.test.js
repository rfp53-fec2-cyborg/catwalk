/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import MarkAsHelpful from '../MarkAsHelpful.jsx';
import Modal from '../Modal.jsx';
import ModalPhoto from '../ModalPhoto.jsx';
import StarRating from '../StarRating.jsx';

it ('MarkAsHelpful component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkAsHelpful />, div);
});

it ('Modal components renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
  ReactDOM.render(<ModalPhoto props={'https://i.imgur.com/R2UqMBy.jpg'}/>, div);
});

it ('StarRating component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarRating rating={{rating: 5}}/>, div);
});