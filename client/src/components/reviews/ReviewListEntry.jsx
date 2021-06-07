import React, { useEffect, useState } from 'react';
import { stringToDate } from '../../helper/dateFunctions.js';
import { checkValidPhoto } from '../../helper/imageFunctions.js';
import { checkStringLength } from '../../helper/stringFunctions.js';


const ReviewListEntry = (props) => {

  const summaryMaxLength = 60;
  const bodyMaxLength = 250;
  const [helpTally, setHelpTally] = useState(props.review.helpfulness);

  const style = {
    padding: '5px',
    margin: '5px',
  };

  const reportReview = () => {
    console.log('Click listener works');
  };

  return (
    <article key={props.index} style={style} >
      <div> {props.review.reviewer_name}, {stringToDate(props.review.date)} </div>
      <div> {props.review.rating} stars</div>
      <div> {checkStringLength(props.review.summary, summaryMaxLength)} </div>
      <p>
        {checkStringLength(props.review.body, bodyMaxLength)}
      </p>
      {props.review.photos.map((photo, index) => {
        return <img width="125" height="125" key={photo.id} src={checkValidPhoto(photo.url)} />;
      })}
      <div> {props.review.recommend ? 'I recommend this product' : null} </div>
      <div> Response:
        <p> {props.review.response} </p>
      </div>
      <div> Was this review helpful? <u onClick={() => setHelpTally(helpTally + 1)} >Yes</u> <u value="No" onClick={() => setHelpTally(helpTally - 1)} >No</u> ({helpTally}) </div>
      <div> <u onClick={reportReview} >Report</u> </div>
    </article>
  );
};

export default ReviewListEntry;