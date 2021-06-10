import React, { useState } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingFilterDesc from './RatingFilterDesc.jsx';

import StarRating from '../shared/StarRating.jsx';
import { MakeRating } from '../../helpers/MakeRating.js';
// import { reviewsMeta } from '../../../mock-data/reviewsMeta.js';

const Rating = ({reviews}) => {

  console.log('Rating.jsx', reviews);

  const ratingData = MakeRating(reviewsMeta.ratings);

  const [rating, setRating] = useState(ratingData.roundedValue);
  return (
    <div>
      <div>
        {rating} <StarRating score={rating}/>
      </div>
      <div>
        <h5> Rating Breakdown </h5>
        <RatingBreakdown data={reviews}/>
      </div>
    </div>
  );
};

export default Rating;