import React, { useEffect, useState } from 'react';
import { reviews } from '../../../mock-data/reviews.js';
import { reviewsMeta } from '../../../mock-data/reviewsMeta.js';
import ReviewList from './ReviewList.jsx';

const Reviews = (props) => {

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
      <h2>RATINGS & REVIEWS</h2>
      <div>
        {reviews.results.slice(0, length).map((review, index) =>
          <ReviewList
            review={review}
            key={review.review_id}
            index={index}
          />
        )}
      </div>
      {showMoreReviews()}
    </>
  );
};

export default Reviews;