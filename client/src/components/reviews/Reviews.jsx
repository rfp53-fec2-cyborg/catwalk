import React, { useEffect, useState } from 'react';
import { reviewsMeta } from '../../../mock-data/reviewsMeta.js';
import ReviewList from './ReviewList.jsx';

const Reviews = (props) => {

  return (
    <>
      <h2>RATINGS & REVIEWS</h2>
      <ReviewList />
    </>
  );
};

export default Reviews;