import React, { useState } from 'react';

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

const RatingBreakdown = ({data}) => {

  const [starData, setStarData] = useState(prepareData(data));
  console.log(starData);
  return (
    <div>
      {starData.map((value, index) => {
        let key = starData.length;
        return (
          <div key={key - index} >
            <u>{`${[key - index]} stars`}</u> {value[key - index]}
          </div>
        );
      })}
    </div>
  );
};

export default RatingBreakdown;