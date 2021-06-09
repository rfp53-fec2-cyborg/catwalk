import React, { useEffect, useState } from 'react';
import { reviews } from '../../../mock-data/reviews.js';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = ({ratingFilterCriteria}) => {

  console.log('from rating breakdown', ratingFilterCriteria);

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

  const filterReviewsByRating = () => {
    let reviewsByRating = ratingFilterCriteria.length === 0 ? [5, 4, 3, 2, 1] : ratingFilterCriteria;
    debugger;
    return reviews.results.filter(singleReview => reviewsByRating.indexOf(singleReview.rating) !== -1)
      .slice(0, length).map((review, index) =>
        <ReviewListEntry
          review={review}
          key={review.review_id}
          index={index}
        />
      );
  };

  return (
    <>
      {filterReviewsByRating()}
      {showMoreReviews()}
    </>
  );
};

export default ReviewList;