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
    const index = rating.indexOf(ratingValue);
    if (index > -1) {
      setRating(array => rating.splice(0, index));
    } else {
      setRating(array => [...array, ratingValue]);
    }
  };

  console.log(rating);

  return (
    <div>
      {starData.map((value, index) => {
        let key = starData.length;
        var {rating, ratingCount} = {rating: key - index, ratingCount: value[key - index]};

        return (
          <div key={rating}>
            <div >
              <u value={rating} onClick={(e) => handleRatingSelected(e)} > {`${rating} stars`} </u>
              <RatingBar data={{rating, ratingCount, max}} handleRatingSelected={handleRatingSelected} />
            </div>
          </div>
        );
      })}
      <ReviewList ratingFilterCriteria={rating}/>
    </div>
  );
};

export default RatingBreakdown;