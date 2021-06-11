import React, { useState, useEffect } from 'react';
import RatingBar from './RatingBar.jsx';
import Sorting from './Sorting.jsx';
import RatingFilterDesc from './RatingFilterDesc.jsx';
import Recommended from './Recommended.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

import { MakeRating, reverseRatingFromHighestToLowestInArray } from '../../helpers/MakeRating.js';

const RatingBreakdown = ({data}) => {

  const ratingOverview = data.reviewsMeta;

  const [starData, setStarData] = useState(reverseRatingFromHighestToLowestInArray(ratingOverview.ratings));
  const [max, setMax] = useState(ratingOverview.maxRating);
  const [ratingFilter, setRatingFilter] = useState([]);

  const handleRatingSelected = (e) => {
    let ratingValue = Number(e.currentTarget.getAttribute('value'));
    let index = ratingFilter.indexOf(ratingValue);
    if (index > -1) {
      setRatingFilter(array => {
        array.splice(index, 1);
        return [...array];
      });
    } else {
      setRatingFilter(array => [...array, ratingValue]);
    }
  };

  return (
    <>
      <div className="container">
        <>
          <RatingFilterDesc data={ratingFilter} setRatingFilter={setRatingFilter}/>
        </>
        <div className="breakdowns">
          {starData.map((value, index) => {
            let key = starData.length;
            var {rating, ratingCount} = {rating: key - index, ratingCount: value[key - index]};

            return (
              <div key={rating}>
                <div className="rating-breakdown" value={rating} onClick={(e) => handleRatingSelected(e)}>
                  <u > {`${rating} stars`} </u>
                  <RatingBar ratingCount={ratingCount} ratingOverview={ratingOverview} />
                </div>
              </div>
            );
          })}
          <Recommended recommendedData={ratingOverview.recommended}/>
          <ProductBreakdown data={data}/>
        </div>

        <div className="review-list">
          <Sorting data={data} ratingFilter={ratingFilter}/>
        </div>
      </div>
    </>
  );
};

export default RatingBreakdown;