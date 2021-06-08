import React from 'react';
import StarRating from '../shared/StarRating.jsx';

const Rating = ({ rating }) => {
  return (
    <div>
      <StarRating score={rating.value} />
      <a href="">Read all {rating.numReviews} reviews</a>
    </div>
  );
};

export default Rating;