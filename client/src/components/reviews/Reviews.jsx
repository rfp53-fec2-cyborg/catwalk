import React from 'react';
import ReviewList from './ReviewList.jsx';
import Rating from './Rating.jsx';

const Reviews = (props) => {

  return (
    <div>
      <h2>RATINGS & REVIEWS</h2>
      <>
        <Rating reviews={props}/>
      </>
    </div>
  );
};

export default Reviews;