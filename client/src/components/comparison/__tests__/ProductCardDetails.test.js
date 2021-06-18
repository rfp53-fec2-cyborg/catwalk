/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ProductCardDetails from '../ProductCardDetails.jsx';
import {productRelated} from '../../../../mock-data/productRelated.js';


// test visual/render
const detailedRelatedProduct = {
  'category': 'Shoes',
  'name': 'Joe',
  'price': '2.00'
};

const currentReviewMeta = [
  {
    'ratings': {
      'roundedValue': '3.00'
    }
  }
];

const relatedProductsStylesArr = [];
test('renders the product card details with star rating', () => {
  render(<ProductCardDetails
    detailedRelatedProduct={detailedRelatedProduct}
    relatedProductsStylesArr={relatedProductsStylesArr}
    currentReviewMeta={currentReviewMeta}
  />

  );

  const checkCategory = screen.getByText('Shoes');
  expect(checkCategory).toBeDefined();
});
