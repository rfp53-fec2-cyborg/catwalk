/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ProductCardDetails from '../ProductCardDetails.jsx';
import {productRelated} from '../../../../mock-data/productRelated.js';


// test visual/render
const detaledRelatedProduct = {
  'category': 'Shoes',
  'name': 'Joe',
  'price': '2.00'
};

const relatedProductsStylesArr = [];
test('renders the product card details', () => {
  render(<ProductCardDetails detaledRelatedProduct={detaledRelatedProduct} relatedProductsStylesArr={relatedProductsStylesArr}/>);

  const checkCategory = screen.getByText('Shoes');
  expect(checkCategory).toBeDefined();
});
