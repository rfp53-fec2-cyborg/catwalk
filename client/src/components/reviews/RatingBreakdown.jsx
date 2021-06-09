import React, { useState, useEffect } from 'react';
import RatingBar from './RatingBar.jsx';
import ReviewList from './ReviewList.jsx';

var prepareData = (data) => {
  let result = [];
  const ratingArr = Object.entries(data);
  ratingArr.forEach(([key, value]) => {
    let obj = {};
    obj[key] = Number(value);
    result.push(obj);
  });
  return result.reverse();
};

var findMax = (data) => {
  var max = 0;
  for (var key in data) {
    max = Math.max(max, data[key]);
  }
  return max;
};

export const RatingBreakdown = ({data}) => {

  const [starData, setStarData] = useState(prepareData(data));
  const [max, setMax] = useState(findMax(data));
  const [rating, setRating] = useState([]);

  console.log(rating);

  const sortReviewsByRating = () => {
    return (
      <>
        <ReviewList rating={rating}/>
      </>
    );
  };

  return (
    <div>
      {starData.map((value, index) => {
        let key = starData.length;
        let ratingValue = value[key - index];
        return (
          <div key={key - index}>
            <div >
              <u value={ratingValue} onClick={(e) => {
                setRating(oldArray => [...oldArray, key - index]);
              }}>{`${[key - index]} stars`}</u>
              <RatingBar rating={ratingValue} max={max}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingBreakdown;