import React, { useEffect, useState } from 'react';
import { reviews } from '../../../mock-data/reviews.js';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => {

  const defaultView = 2;
  const totalReviewLength = reviews.results.length;
  const [length, setLength] = useState(defaultView);

  const showMoreReviews = () => {
    if (totalReviewLength > 2) {
      if (length <= totalReviewLength) {
        return <button onClick={() => setLength(length + 2)}>More Reviews</button>;
      }
    }
    return null;
  };

  const showNoReviewList = () => {
    if (totalReviewLength === 0) { return null; }
  };

  return (
    <>
      {showNoReviewList()}
      {reviews.results.slice(0, length).map((review, index) =>
        <ReviewListEntry
          review={review}
          key={review.review_id}
          index={index}
        />
      )}
      {showMoreReviews()}
    </>
  );
};

export default ReviewList;