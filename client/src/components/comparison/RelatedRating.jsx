import React from 'react';
import StarRating from '../shared/StarRating.jsx';

const RelatedRating = ({ currentReviewMeta }) => {

  return (
    <div>
      {currentReviewMeta.product_id ? <StarRating score={'score'} /> : ''}
    </div>
  );
};

export default RelatedRating;