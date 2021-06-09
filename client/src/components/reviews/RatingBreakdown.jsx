import React, { useState } from 'react';
import RatingBar from './RatingBar.jsx';

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

  return (
    <div>
      {starData.map((value, index) => {
        let key = starData.length;
        return (
          <div key={key - index}>
            <div >
              <u>{`${[key - index]} stars`}</u> <RatingBar rating={value[key - index]} max={max}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingBreakdown;