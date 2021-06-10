import React, { useState } from 'react';
import { reviews } from '../../../mock-data/reviews.js';
import { sort } from '../../helpers/sort.js';
import ReviewList from './ReviewList.jsx';
import Requester from '../../Requester.js';

const requester = Requester();

const Sorting = (props) => {

  const reviews = props.data.reviews;
  const reviewsMeta = props.data.reviewsMeta;

  const [sortView, setSortView] = useState('');
  const [sortedListOfReviews, setSortedListOfReviews] = useState(reviews.results);

  const handleView = (e) => {
    const view = e.target.value;
    setSortView(view);
    getSortView(view);
  };

  const getSortView = async (view) => {
    let params = {
      'sort': view,
      'count': reviewsMeta.numReviews,
      'product_id': Number(reviews.product)
    };
    try {
      console.log('Sorted reviews retrieved from API');
      let reviewData = await requester.getReviews(params);
      setSortedListOfReviews(reviewData.results);
    } catch (err) {
      console.error('Error with fetching data from API: ', err);
      console.log('Sort reviews retrieved from internal function.');
      let sortView = err.response.config.params.sort;
      let selfSortedData = await sort(reviews.results);
      setSortedListOfReviews(selfSortedData[sortView]);
    }
  };
  return (
    <div>
      There are {reviewsMeta.numReviews} reviews. Sort on <select onChange={handleView}>
        <option value="relevant" defaultValue="selected" > Relevant </option>
        <option value="newest" > Newest </option>
        <option value="helpful" > Helpful </option>
      </select>
      <ReviewList props={props} sortedListOfReviews={sortedListOfReviews}/>
    </div>
  );
};

export default Sorting;