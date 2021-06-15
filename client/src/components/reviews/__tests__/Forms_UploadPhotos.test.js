/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import AddReviews from '../AddReviews.jsx';

import UploadPhotos from '../review_form/06_UploadPhotos.jsx';

import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Photo upload process', () => {
  it('Photo can be uploaded and will call the handleOnChange function passed to component', async () => {
    const formDetails = {characteristics: {}};
    const handleOnChange = jest.fn();
    render(<UploadPhotos formDetails={formDetails} handleOnChange={handleOnChange} />);

    const file = new File(['I am a photo'], 'photo.png');
    await userEvent.click(screen.getByTestId('imageUpload'), { target: { file: [file]}});
    expect(handleOnChange).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('imageUpload').file.length).toBeGreaterThan(0);
  });
});