/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import AddReviews from '../AddReviews.jsx';

import BodyWordCount from '../review_form/05.1_BodyWordCount.jsx';

import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Word count messaging and logic', () => {
  it('Minimum reached message appears correctly if body word count is equal to greater than 50', async () => {
    const formDetailsBodyLength = 50;
    const {container} = render(<BodyWordCount formDetailsBodyLength={formDetailsBodyLength} />);
    expect(screen.getByText('Minimum reached.')).toBeDefined();

    const updateProps = props => render(<BodyWordCount {...props} />, {container});
    updateProps({formDetailsBodyLength: 75});
    expect(screen.getByText('Minimum reached.')).toBeDefined();
  });

  it('Minimum required message appears correctly if body word count is less than 50', async () => {
    const formDetailsBodyLength = 36;
    const {container} = render(<BodyWordCount formDetailsBodyLength={formDetailsBodyLength} />);
    let message = document.getElementById('body-word-count').innerHTML;
    expect(message).toMatch(`Minimum required characters left: ${50 - formDetailsBodyLength}`);

    const updateProps = props => render(<BodyWordCount {...props} />, {container});
    updateProps({formDetailsBodyLength: 0});
    message = document.getElementById('body-word-count').innerHTML;
    expect(message).toMatch('Minimum required characters left: 50');
  });

  it('Body word count is dynamically updated', async () => {
    const formDetailsBodyLength = 152;
    const {container} = render(<BodyWordCount formDetailsBodyLength={formDetailsBodyLength} />);
    let message = document.getElementById('body-word-count').innerHTML;
    expect(message).toMatch('Minimum reached.');

    const updateProps = props => render(<BodyWordCount {...props} />, {container});
    updateProps({formDetailsBodyLength: 49});
    message = document.getElementById('body-word-count').innerHTML;
    expect(message).toMatch('Minimum required characters left: 1');
  });
});