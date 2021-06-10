import React, { useState } from 'react';
import { reviews } from '../../../mock-data/reviews.js';
import { sort } from '../../helpers/sort.js';
import ReviewList from './ReviewList.jsx';

const Sorting = (props) => {

  const [sortView, setSortView] = useState('Relevant');
  const [sortedListOfReviews, setSortedListOfReviews] = useState(sort(reviews.results));

  const handleView = (e) => {
    const view = e.currentTarget.value;
    setSortView(view);
  };

  return (
    <div>
      There are {props.ratingOverview.numReviews} reviews. Sort on <select onChange={handleView}>
        <option name="Relevant" > Relevant </option>
        <option name="Newest" > Newest </option>
        <option name="Helpful" > Helpful </option>
      </select>
      <ReviewList ratingFilterCriteria={props.rating} sortedResults={sortedListOfReviews[sortView]}/>
    </div>
  );
};

export default Sorting;