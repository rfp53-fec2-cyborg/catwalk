import React, { useEffect, useState } from 'react';

const ReviewList = (props) => {

  const style = {
    padding: '5px',
    margin: '5px',
  };
  return (
    <div key={props.index} style={style} >
      <div> {props.review.reviewer_name}, {props.review.date}</div>
      <div> {props.review.rating} stars</div>
      <div> {props.review.summary}</div>
      <div> {props.review.body}</div>
      {/* Will need to create new component to display array of photos */}
      <div> {props.review.response}</div>
      <div> {props.review.recommend}</div>
      <div> {props.review.helpfulness}</div>
    </div>
  );
};

export default ReviewList;