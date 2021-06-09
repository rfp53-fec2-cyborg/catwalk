import React, { useState } from 'react';
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

  const handleRatingSelected = (e) => {
    const ratingValue = Number(e.target.getAttribute('value'));
    console.log(ratingValue);
    const index = rating.indexOf(ratingValue);
    if (index > -1) {
      setRating(item => rating.splice(0, index));
    } else {
      setRating(item => [...item, ratingValue]);
    }
  };

  return (
    <div>
      {starData.map((value, index) => {
        let key = starData.length;
        let ratingCount = value[key - index];
        let rating = [key - index];
        return (
          <div key={rating}>
            <div >
              <u value={rating} onClick={(e) => handleRatingSelected(e)} > {`${rating} stars`} </u>
              <RatingBar value={ratingCount} max={max}/>
            </div>
          </div>
        );
      })}
      <ReviewList ratingFilterCriteria={rating}/>
    </div>
  );
};

export default RatingBreakdown;