import React, { useState } from 'react';
import { reviews } from '../../../mock-data/reviews.js';
import { sort } from '../../helpers/sort.js';
import ReviewList from './ReviewList.jsx';
import Requester from '../../Requester.js';

const Sorting = (props) => {

  console.log(props);

  const [sortView, setSortView] = useState('relevant');
  const [sortedListOfReviews, setSortedListOfReviews] = useState(sort(reviews.results));

  const handleView = (e) => {
    const view = e.currentTarget.value;
    setSortView(view);
  };

  const getSortView = async () => {
    let params = {
      page: 0,
      count: 5,
      sort: sortView,
      productID: reviews.product
    };
    try {
      console.log('Sorted reviews retrieved from API');
      let reviewData = await requester.getReviews(params);
      return reviewData;
    } catch (err) {
      console.error('Error with fetching data from API; sorted reviews retrieved from internal function');
      return sort(reviews.results);
    }
  };

  return (
    <div>
      There are {props.ratingOverview.numReviews} reviews. Sort on <select onChange={handleView}>
        <option name="relevant" > Relevant </option>
        <option name="newest" > Newest </option>
        <option name="helpful" > Helpful </option>
      </select>
      {/* <ReviewList ratingFilterCriteria={props.rating} sortedResults={sortedListOfReviews[sortView]}/> */}
    </div>
  );
};

export default Sorting;