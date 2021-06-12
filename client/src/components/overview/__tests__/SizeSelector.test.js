/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SizeSelector from '../SizeSelector.jsx';

const skusOutOfStock = [
  {
    'id': '522166',
    'quantity': 0,
    'size': '7'
  },
  {
    'id': '522167',
    'quantity': 0,
    'size': '7.5'
  },
  {
    'id': '522168',
    'quantity': 0,
    'size': '8'
  },
  {
    'id': '522169',
    'quantity': 0,
    'size': '8.5'
  }
];

const skusInStock = [
  {
    'id': '522166',
    'quantity': 5,
    'size': '7'
  },
  {
    'id': '522167',
    'quantity': 16,
    'size': '7.5'
  },
  {
    'id': '522168',
    'quantity': 20,
    'size': '8'
  },
  {
    'id': '522169',
    'quantity': 0,
    'size': '8.5'
  }
];

describe('SizeSelector when style has remaining stock', () => {
  beforeEach(() => {
    render(
      <SizeSelector
        showWarning={false}
        isOutOfStock={false}
        skus={skusInStock}
        selectedSkuId={''}
        handleSkusSelection={() => {}}
      />
    );
  });

  test('SizeSelector is active when style has remaining stock', () => {
    expect(screen.getByRole('combobox', { name: 'size-select' })).toBeEnabled();
  });

  test('SizeSelector should contain correct entries', () => {
    const selector = screen.getByRole('combobox', { name: 'size-select' });
    const options = [
      screen.getByRole('option', { name: '7' }),
      screen.getByRole('option', { name: '7.5' }),
      screen.getByRole('option', { name: '8' })
    ];
    options.forEach(options => {
      expect(selector).toContainElement(options);
    });
  });

  test('SizeSelector should not contain size that has no remaining stock', () => {
    const selector = screen.getByRole('combobox', { name: 'size-select' });
    const absentOption = screen.queryByRole('option', { name: '8.5' });
    expect(selector).not.toContainElement(absentOption);
  });
});

test('SizeSelector is inactive when style has no remaining stock', () => {
  render(
    <SizeSelector
      isOutOfStock={true}
      showWarning={false}
      selectedSkuId={'522166'}
      skus={skusOutOfStock}
      handleSkusSelection={() => { }}
    />
  );
  expect(screen.getByRole('combobox', { name: 'size-select' })).toBeDisabled();
});