import React, { useState } from 'react';
import { stringToDate } from '../../helpers/dateFunctions.js';
import { checkValidPhoto } from '../../helpers/imageFunctions.js';
import withClickReporting from '../../helpers/withClickReporting';
import MarkAsHelpfulOrReport from './MarkAsHelpfulOrReport.jsx';
import ModalPhoto from './ModalPhoto.jsx';
import checkmark from '../../assets/checkmark.svg';
import StarRating from '../shared/StarRating.jsx';
import Requester from '../../Requester.js';
import LazyImage from '../shared/LazyImage.jsx';

const requester = Requester();

const ReviewListEntry = (props) => {

  const summaryMaxLength = 60;
  const bodyMaxLength = 250;
  const [extendedView, setExtendedView] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const reviewID = props.review.review_id;

  const reportReview = async (id) => {
    try {
      let response = await requester.reportReview(id);
      props.getSortView(props.sortView);
    } catch (err) {
      console.error(err);
    }
  };

  const markReviewAsHelpful = async (id) => {
    try {
      let response = await requester.markReviewHelpful(id);
      props.getSortView(props.sortView);
    } catch (err) {
      console.error(err);
    }
  };

  const showDescription = () => {
    if (props.review.body.length > bodyMaxLength && !extendedView) {
      return (
        <>
          <p> {`${props.review.body.substring(0, bodyMaxLength)}...`} </p>
          <u onClick={() => { setExtendedView(true); showDescription(); }}>Show More</u>
        </>
      );
    }
    return (
      <> <p> {props.review.body} </p> </>
    );
  };

  const MarkAsHelpfulOrReportWithClickReporting = withClickReporting(
    MarkAsHelpfulOrReport,
    'MarkAsHelpfulOrReport');

  return (
    <article className="review-card" >
      {/* Show reviewer name, review date, and the rating */}
      <StarRating score={`${props.review.rating}.00`} /> <span className="review-name-date"> {props.review.reviewer_name}, {stringToDate(props.review.date)} </span>

      {/* Show maximum of 60 characters for the summary */}
      <div className="review-body" > {props.review.summary.length > summaryMaxLength
        ? `${props.review.summary.substring(0, summaryMaxLength)}...`
        : props.review.summary}
      </div>

      {/* Show maximum of 250 characters for the body with option to expand and show more */}
      {showDescription()}

      {/* Show images */}
      <div className="review-photo">
        {props.review.photos.map((photo, index) => {
          return <LazyImage
            alt="Uploaded pictures for a product review"
            name="photo"
            className="review-thumbnail"
            key={photo.id}
            id={photo.url}
            src={checkValidPhoto(photo.url)}
            onClick={() => setShowModal(current => !current)}
          />;
        })}
        {/* Show modal logic with uses a shared component */}
        {showModal
          ? <ModalPhoto
            url={event.target.id}
            name={event.target.name}
            photos={props.review.photos}
          />
          : null}
      </div>

      {/* Product recommendation from review */}
      {props.review.recommend ? <div className="review-recommend"> <LazyImage src={checkmark} alt="Checkmark"/> I recommend this product </div> : null}

      {/* Show response if there is a response */}
      {props.review.response
        ? <div className="review-response"> Response: <p> {props.review.response} </p> </div>
        : null}

      {/* Uses shared component to mark something helpful or report */}
      <MarkAsHelpfulOrReportWithClickReporting
        helpfulness={props.review.helpfulness}
        reviewID={reviewID}
        markReviewAsHelpful={markReviewAsHelpful}
        reportReview={reportReview}
      />

    </article>
  );
};

export default ReviewListEntry;