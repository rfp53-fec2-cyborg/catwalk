import React, { useState, useEffect } from 'react';
import RatingBar from './RatingBar.jsx';
import Sorting from './Sorting.jsx';
import withClickReporting from '../../helpers/withClickReporting';
import RatingFilterDesc from './RatingFilterDesc.jsx';
import Recommended from './Recommended.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import StarRating from '../shared/StarRating.jsx';

import { MakeRating, reverseRatingFromHighestToLowestInArray } from '../../helpers/MakeRating.js';

const RatingBreakdown = ({ data, reportClick }) => {

  const ratingOverview = data.reviewsMeta;
  const ratingData = MakeRating(ratingOverview.ratings);

  const [starData, setStarData] = useState(reverseRatingFromHighestToLowestInArray(ratingOverview.ratings));
  const [ratingFilter, setRatingFilter] = useState([]);
  const [overallRating, setOverallRating] = useState(ratingData.roundedValue);

  let handleRatingSelected = (e) => {
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
    if (reportClick) { reportClick(event); }
  };

  const SortingWithClickReporting = withClickReporting(Sorting, 'Sorting');

  return (
    <>
      <div className="container">
        <div className="breakdown-container">
          <div className="overall-rating" > {overallRating} <StarRating score={overallRating}/> </div>
          <Recommended recommendedData={ratingOverview.recommended}/>
          <RatingFilterDesc data={ratingFilter} setRatingFilter={setRatingFilter}/>

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
          <ProductBreakdown data={data}/>
        </div>

        <div className="review-list-container">
          <SortingWithClickReporting data={data} ratingFilter={ratingFilter}/>
        </div>
      </div>
    </>
  );
};

export default RatingBreakdown;