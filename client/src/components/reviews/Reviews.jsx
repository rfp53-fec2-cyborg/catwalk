import React from 'react';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

const Reviews = (props) => {

  return (
    <div>
      <h2>RATINGS & REVIEWS</h2>
      <>
        <RatingBreakdown data={props}/>
      </>
    </div>
  );
};

export default Reviews;