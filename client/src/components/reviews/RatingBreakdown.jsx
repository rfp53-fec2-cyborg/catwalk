import React, { useState, useEffect } from 'react';
import RatingBar from './RatingBar.jsx';
import ReviewList from './ReviewList.jsx';
import RatingFilterDesc from './RatingFilterDesc.jsx';

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

const RatingBreakdown = ({data}) => {

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

  return (
    <>
      <div>
        <RatingFilterDesc data={rating} setRating={setRating}/>
      </div>
      <div>
        {starData.map((value, index) => {
          let key = starData.length;
          var {rating, ratingCount} = {rating: key - index, ratingCount: value[key - index]};

          return (
            <div key={rating}>
              <div className="rating-breakdown" value={rating} onClick={(e) => handleRatingSelected(e)}>
                <u > {`${rating} stars`} </u>
                <RatingBar data={{rating, ratingCount, max}} />
              </div>
            </div>
          );
        })}
        <ReviewList ratingFilterCriteria={rating}/>
      </div>
    </>
  );
};

export default RatingBreakdown;