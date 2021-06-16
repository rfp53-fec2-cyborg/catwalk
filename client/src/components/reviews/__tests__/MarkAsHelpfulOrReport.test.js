/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';

import MarkAsHelpfulOrReport from '../MarkAsHelpfulOrReport.jsx';

import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Marking a review helpful or not', () => {
  const reviewID = 12345;
  const markReviewAsHelpful = jest.fn();
  const reportReview = jest.fn();

  beforeEach(() => {
    let helpfulness = 5;
    render(<MarkAsHelpfulOrReport
      helpfulness={helpfulness}
      reviewID={reviewID}
      markReviewAsHelpful={markReviewAsHelpful}
      reportReview={reportReview}
    />);
  });

  it('Helpful tally increases when a review is marked as helpful', async () => {
    const helpful = screen.getByText(/yes/i);
    await userEvent.click(helpful);
    const helpfulTally = screen.getByText(/5/i);
    expect(helpfulTally).toBeDefined();
    expect(helpfulTally).not.toBe('(5)');
    expect(markReviewAsHelpful).toHaveBeenCalledTimes(1);
  });

  it('If a review is reported, the reportReview function will be called', async () => {
    let report = screen.getByText(/report/i);
    await userEvent.click(report);
    expect(reportReview).toHaveBeenCalledTimes(1);
  });

});