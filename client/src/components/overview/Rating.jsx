import React from 'react';
import StarRating from '../shared/StarRating.jsx';

const Rating = ({ reviewsMeta }) => {
  return (
    <div>
      {reviewsMeta.roundedValue ? <StarRating score={reviewsMeta.roundedValue} /> : ''}
      <a href="">Read all {reviewsMeta.numReviews} reviews</a>
    </div>
  );
};

export default Rating;