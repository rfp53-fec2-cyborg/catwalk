import React from 'react';
import StarRating from '../shared/StarRating.jsx';

const Rating = ({ reviewsMeta }) => {
  return (
    <div className="product-overview-rating">
      {reviewsMeta.roundedValue && reviewsMeta.numRatings > 0 ? <StarRating score={reviewsMeta.roundedValue} /> : null}
      <a href="#reviews">Read all {reviewsMeta.numReviews} reviews</a>
    </div>
  );
};

export default Rating;