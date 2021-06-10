import React, { useState } from 'react';
import { reviews } from '../../../mock-data/reviews.js';
import { sort } from '../../helpers/sort.js';
import ReviewList from './ReviewList.jsx';
import Requester from '../../Requester.js';

const Sorting = (props) => {

  console.log('Sorting.jsx', props);

  const [sortView, setSortView] = useState('relevant');
  const [sortedListOfReviews, setSortedListOfReviews] = useState(props.data.reviews.results);

  const handleView = (e) => {
    const view = e.currentTarget.value;
    setSortView(view);
  };

  const getSortView = async () => {
    let params = {
      sort: sortView,
      productID: Number(props.data.reviews.product)
    };
    try {
      console.log('Sorted reviews retrieved from API');
      let reviewData = await requester.getReviews(params);
      return reviewData;
    } catch (err) {
      console.error('Error with fetching data from API; sorted reviews retrieved from internal function');
      let reviewData = await sort(props.data.reviews.results);
      setSortedListOfReviews(reviewData);
    }
  };

  return (
    <div>
      There are {props.data.reviewsMeta.numReviews} reviews. Sort on <select onChange={handleView}>
        <option name="relevant" > Relevant </option>
        <option name="newest" > Newest </option>
        <option name="helpful" > Helpful </option>
      </select>
      <ReviewList props={props} sortedListOfReviews={sortedListOfReviews || sortedListOfReviews[sortView]}/>
    </div>
  );
};

export default Sorting;