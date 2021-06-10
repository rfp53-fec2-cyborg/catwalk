import React, { useState } from 'react';
import { reviews } from '../../../mock-data/reviews.js';
import { sort } from '../../helpers/sort.js';
import ReviewList from './ReviewList.jsx';

const Sorting = (props) => {

  const [sortView, setSortView] = useState('Relevance');
  const [sortedListOfReviews, setSortedListOfReviews] = useState(sort(reviews.results));

  const handleView = (e) => {
    const view = e.currentTarget.value;
    setSortView(view);
  };

  return (
    <div>
      {props.ratingOverview.numReviews} reviews sorted by <select onChange={handleView}>
        <option name="Relevance" > Relevance </option>
        <option name="Newest" > Newest </option>
        <option name="Helpful" > Helpful </option>
      </select>
      <ReviewList ratingFilterCriteria={props.rating} sortedResults={sortedListOfReviews.sortView}/>
    </div>
  );
};

export default Sorting;