/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import AddReviews from '../AddReviews.jsx';

import Characteristics from '../review_form/04_Characteristics.jsx';
import IndividualCharacteristic from '../review_form/04.1_IndividualCharacteristic.jsx';
import ShowRatingDesc from '../review_form/04.2_ShowRatingDesc.jsx';
import { reviewsMeta } from '../../../../mock-data/reviewsMeta.js';

import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Characteristics of a product can be rated', () => {
  it('Given a list of a characteristics available for a product, the same ones will appear to be allowed for rating', async () => {
    const formDetails = {characteristics: {}};
    const handleOnChange = () => {};
    const productCharacteristics = {
      'Size': {'id': 57235},
      'Width': {'id': 57236},
      'Comfort': {'id': 57237},
      'Quality': {'id': 57238}
    };
    render(<Characteristics formDetails={formDetails} handleOnChange={handleOnChange} reviewsMeta={reviewsMeta}/>);

    const sizeDesc = screen.getByRole('radio', {name: /size 1 2 3 4 5/i});
    expect(sizeDesc).toBeDefined();

    const widthDesc = screen.getByRole('radio', {name: /width 1 2 3 4 5/i});
    expect(widthDesc).toBeDefined();

    const comfortDesc = screen.getByRole('radio', {name: /comfort 1 2 3 4 5/i});
    expect(comfortDesc).toBeDefined();

    const qualityDesc = screen.getByRole('radio', {name: /quality 1 2 3 4 5/i});
    expect(qualityDesc).toBeDefined();

  });

  const handleOnChange = jest.fn();
  const props = {
    'formDetails': {
      'product_id': 17067,
      'rating': 0,
      'recommend': '',
      'summary': '',
      'body': '',
      'name': '',
      'email': '',
      'photos': [],
      'characteristics': {}
    },
    'value': {
      'characteristic': 'Quality',
      'details': {
        'id': 57225,
        'value': '3.1568627450980392'
      }
    }
  };

  it('Radio buttons for rating are by default not selected', async () => {
    render(<IndividualCharacteristic formDetails={props.formDetails} value={props.value} handleOnChange={handleOnChange}/>);

    const rating1 = screen.getByRole('radio', {name: /1/i});
    const rating2 = screen.getByRole('radio', {name: /2/i});
    const rating3 = screen.getByRole('radio', {name: /3/i});
    const rating4 = screen.getByRole('radio', {name: /4/i});
    const rating5 = screen.getByRole('radio', {name: /5/i});
    const ratings = [rating1, rating2, rating3, rating4, rating5];

    const getCheckedValueForRatings = (ratings) => {
      for (var i = 0; i < ratings.length; i++) {
        if (ratings[i].checked) { return true; }
      }
      return false;
    };
    expect(getCheckedValueForRatings(ratings)).toBe(false);

    userEvent.click(rating1);
    expect(rating1.checked).toBe(true);
  });


  it('When rating is selected, correct characteristic id and description is returned', async () => {
    render(<IndividualCharacteristic formDetails={props.formDetails} value={props.value} handleOnChange={handleOnChange}/>);

    const rating3 = screen.getByRole('radio', {name: /3/i});
    // const qualityDesc = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];

    userEvent.click(rating3);
    expect(rating3.value).toBe('3');
    expect(rating3.checked).toBe(true);
    expect(screen.getByText(/what i expected/i)).toBeDefined();
  });

  it('Only one rating can be selected at once', async () => {
    render(<IndividualCharacteristic formDetails={props.formDetails} value={props.value} handleOnChange={handleOnChange}/>);

    const rating3 = screen.getByRole('radio', {name: /3/i});
    const rating4 = screen.getByRole('radio', {name: /4/i});
    // const qualityDesc = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];

    userEvent.click(rating3);
    userEvent.click(rating4);
    expect(rating4.value).toBe('4');
    expect(rating4.checked).toBe(true);
    expect(rating3.checked).toBe(false);
    expect(screen.getByText(/pretty great/i)).toBeDefined();
  });

});