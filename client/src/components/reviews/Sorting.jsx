import React, { useState, useEffect } from 'react';
import { sort } from '../../helpers/sort.js';
import ReviewList from './ReviewList.jsx';
import Requester from '../../Requester.js';
import withClickReporting from '../../helpers/withClickReporting.js';

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
    if (props.reportClick) { props.reportClick(e); }
  };

  const getSortView = async (view) => {
    let params = {
      'sort': view,
      'count': reviewsMeta.numReviews,
      'product_id': Number(reviews.product)
    };
    try {
      let reviewData = await requester.getReviews(params);
      setSortedListOfReviews(reviewData.results);
    } catch (err) {
      let sortView = err.response.config.params.sort;
      let selfSortedData = await sort(reviews.results);
      setSortedListOfReviews(selfSortedData[sortView]);
    }
  };

  const ReviewListWithClickReporting = withClickReporting(ReviewList, 'ReviewList');

  return (
    <div>
      There are {reviewsMeta.numReviews} reviews. Sort on <select onChange={handleView}>
        <option value="relevant" defaultValue="selected" > Relevant </option>
        <option value="newest" > Newest </option>
        <option value="helpful" > Helpful </option>
      </select>
      <ReviewListWithClickReporting
        props={props}
        sortedListOfReviews={sortedListOfReviews}
        sortView={sortView}
        getSortView={getSortView} />
    </div>
  );
};

export default Sorting;