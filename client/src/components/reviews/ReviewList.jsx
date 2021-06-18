import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import AddReviews from './AddReviews.jsx';
import withClickReporting from '../../helpers/withClickReporting.js';

const ReviewList = ({reportClick, ...props}) => {
  const data = props.props.data;
  const reviewsMeta = props.props.data.reviewsMeta;
  const ratingFilter = props.props.ratingFilter;
  const sortedListOfReviews = props.sortedListOfReviews;

  const defaultView = 2;
  const totalReviewLength = sortedListOfReviews.length;
  const [length, setLength] = useState(defaultView);

  const showMoreReviews = () => {
    if (totalReviewLength > 2) {
      if (length <= totalReviewLength) {
        return <button onClick={(e) => { setLength(length + 2); if (reportClick) { reportClick(e); } }}>More Reviews</button>;
      }
    }
    return null;
  };

  const AddReviewsWithClickReporting = withClickReporting(AddReviews, 'AddReviews');

  const filterReviewsByRating = () => {
    // By default, show all reviews with all ratings; otherwise, show reviews with only specified ratings
    let reviewsByRating = ratingFilter.length === 0 ? [5, 4, 3, 2, 1] : ratingFilter;

    // Filter based on above array of ratings selected, whether default or whether changed
    return sortedListOfReviews.filter(singleReview => reviewsByRating.indexOf(singleReview.rating) !== -1)
      .slice(0, length).map((review, index) =>
        <ReviewListEntry
          review={review}
          key={review.review_id}
          index={index}
          getSortView={props.getSortView}
          sortView={props.sortView}
        />
      );
  };

  return (
    <>
      {filterReviewsByRating()}
      {showMoreReviews()}
      <AddReviewsWithClickReporting data={data} />
    </>
  );
};

export default ReviewList;