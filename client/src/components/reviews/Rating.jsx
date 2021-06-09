import React, { useState } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';

import StarRating from '../shared/StarRating.jsx';
import MakeRating from '../../helpers/MakeRating.js';
import { reviewsMeta } from '../../../mock-data/reviewsMeta.js';

var getRating = () => {
  let score;
  const rating = MakeRating(reviewsMeta.ratings);
  score = ((rating.value * 4).toFixed() / 4).toFixed(2);
  return score;
};


const Rating = () => {

  const [rating, setRating] = useState(getRating());
  return (
    <div>
      <div>
        {rating} <StarRating score={rating}/>
      </div>
      <div>
        <h5> Rating Breakdown </h5>
        <RatingBreakdown data={reviewsMeta.ratings}/>
      </div>
    </div>
  );
};

export default Rating;