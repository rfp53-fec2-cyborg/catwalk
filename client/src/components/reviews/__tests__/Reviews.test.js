/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from '../Reviews.jsx';
import ReviewList from '../ReviewList.jsx';
import ReviewListEntry from '../ReviewListEntry.jsx';
import ModalPhoto from '../ModalPhoto.jsx';
import Modal from '../../shared/Modal.jsx';
import { render } from '@testing-library/react';

it ('Reviews component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews />, div);
});

it ('ReviewList component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewList />, div);
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