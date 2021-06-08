import React, { useEffect, useState } from 'react';
import { stringToDate } from '../../helper/dateFunctions.js';
import { checkValidPhoto } from '../../helper/imageFunctions.js';


const ReviewListEntry = (props) => {

  const summaryMaxLength = 60;
  const bodyMaxLength = 250;
  const [helpTally, setHelpTally] = useState(props.review.helpfulness);
  const [extendedView, setExtendedView] = useState(false);

  const style = {
    padding: '5px',
    margin: '5px',
  };

  const reportReview = () => {
    console.log('Click listener works');
  };

  const showDescription = () => {
    if (props.review.body.length > bodyMaxLength && !extendedView) {
      return (
        <>
          <p> {`${props.review.body.substring(0, bodyMaxLength)}...`} </p>
          <u onClick={() => {
            setExtendedView(true);
            showDescription();
          }}>Show More</u>
        </>
      );
    } else {
      return (
        <>
          <p> {props.review.body} </p>
        </>
      );
    }
  };

  return (
    <article key={props.index} style={style} >
      <div> {props.review.reviewer_name}, {stringToDate(props.review.date)} </div>
      <div> {props.review.rating} stars</div>

      {/* Show maximum of 60 characters for the summary */}
      <div> {props.review.summary.length > summaryMaxLength ? `${props.review.summary.substring(0, summaryMaxLength)}...` : props.review.summary} </div>

      {/* Show maximum of 250 characters for the body with option to expand and show more */}
      {showDescription()}

      {/* Show images */}
      <div>
        {props.review.photos.map((photo, index) => {
          return <img width="125" height="125" key={photo.id} src={checkValidPhoto(photo.url)} />;
        })}
      </div>

      {/* Product recommendation from review */}
      <div> {props.review.recommend ? 'I recommend this product' : null} </div>

      {/* Show response if there is a response */}
      {props.review.response ?
        <div> Response:
          <p> {props.review.response} </p>
        </div>
        :
        null}

      {/* To move into a shared component as this is used in multiple widgets */}
      <div> Was this review helpful? <u onClick={() => setHelpTally(helpTally + 1)} >Yes</u> <u value="No" onClick={() => setHelpTally(helpTally - 1)} >No</u> ({helpTally}) </div>
      <div> <u onClick={reportReview} >Report</u> </div>
    </article>
  );
};

export default ReviewListEntry;