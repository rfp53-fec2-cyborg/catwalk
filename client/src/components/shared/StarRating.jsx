import React, { useState } from 'react';
import { reviewsMeta } from '../../../mock-data/reviewsMeta.js';

const StarRating = ({ratings}) => {

  const computeNumReviews = ratings => {
    return Object.keys(ratings).reduce((sum, key) => {
      return sum + Number.parseInt(ratings[key]);
    }, 0);
  };

  const computeRating = ratings => {
    return Object.keys(ratings).reduce((avg, key) => {
      const score = Number.parseInt(key);
      const count = Number.parseInt(ratings[key]);
      return avg + (score * count / numReviews);
    }, 0).toPrecision(3);
  };

  const [numReviews, setNumReviews] = useState(computeNumReviews(ratings));
  const [rating, setRating] = useState(computeRating(ratings));

  return (
    <div>
      <div>{rating}</div>
      <a href="">Read all {numReviews} reviews</a>
    </div>
  );
};

export default StarRating;