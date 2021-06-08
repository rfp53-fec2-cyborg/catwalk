import React, { useEffect, useState } from 'react';
import { stringToDate } from '../../helpers/dateFunctions.js';
import { checkValidPhoto } from '../../helpers/imageFunctions.js';
import MarkAsHelpful from '../shared/MarkAsHelpful.jsx';
import Modal from '../shared/Modal.jsx';
import checkmark from '../../assets/checkmark.svg';


const ReviewListEntry = (props) => {

  const summaryMaxLength = 60;
  const bodyMaxLength = 250;
  const [extendedView, setExtendedView] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const style = {
    padding: '5px',
    margin: '5px',
  };

  const reportReview = () => {
    console.log('Will be used with API when ready');
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

  return (
    <article style={style} >
      <div> {props.review.reviewer_name}, {stringToDate(props.review.date)} </div>
      <div> {props.review.rating} stars</div>

      {/* Show maximum of 60 characters for the summary */}
      <div> {props.review.summary.length > summaryMaxLength
        ? `${props.review.summary.substring(0, summaryMaxLength)}...`
        : props.review.summary}
      </div>

      {/* Show maximum of 250 characters for the body with option to expand and show more */}
      {showDescription()}

      {/* Show images */}
      <div>
        {props.review.photos.map((photo, index) => {
          return <img
            name="photo"
            width="125"
            height="125"
            key={photo.id}
            id={photo.id}
            src={checkValidPhoto(photo.url)}
            onClick={(event) => setShowModal(current => !current)}
          />;
        })}
        {showModal
          ? <Modal
            id={Number(event.target.id)}
            name={event.target.name}
            photos={props.review.photos}
            setShowModal={setShowModal}
          />
          : null}
      </div>

      {/* Product recommendation from review */}
      {props.review.recommend ? <div> <img src={checkmark}/> 'I recommend this product' </div> : null}

      {/* Show response if there is a response */}
      {props.review.response
        ? <div> Response from seller: <p> {props.review.response} </p> </div>
        : null}

      <MarkAsHelpful
        helpfulness={props.review.helpfulness}
      />
      <div> <u onClick={reportReview} >Report</u> </div>
    </article>
  );
};

export default ReviewListEntry;