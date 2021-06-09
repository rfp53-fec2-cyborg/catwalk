import React from 'react';
import ReviewList from './ReviewList.jsx';
import Rating from './Rating.jsx';

const Reviews = (props) => {

  return (
    <div className="">
      <h2>RATINGS & REVIEWS</h2>
      <div className="">
        <Rating />
      </div>
    </div>
  );
};

export default Reviews;