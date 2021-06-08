import React, { useState } from 'react';

const StarRating = ({rating}) => {
  return (
    <div>
      <div>{rating.value}</div>
      <a href="">Read all {rating.numReviews} reviews</a>
    </div>
  );
};

export default StarRating;