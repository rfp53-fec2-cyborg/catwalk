import React from 'react';
import withClickReporting from '../../helpers/withClickReporting.js';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

const Reviews = (props) => {
  const RatingBreakdownWithClickReporting = withClickReporting(RatingBreakdown, 'RatingBreakdown');
  return (
    <div>
      <h3 id="reviews">RATINGS & REVIEWS</h3>
      <>
        <RatingBreakdownWithClickReporting data={props}/>
      </>
    </div>
  );
};

export default Reviews;