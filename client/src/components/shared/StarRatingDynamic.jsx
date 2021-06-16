import React from 'react';
import stars from '../../assets/stars/index.js';

const StarRatingDynamic = (props) => {

  const drawFilledStars = (e) => {
    const starDiv = [];
    for (var i = 0; i < props.rating; i++) {
      starDiv.push(
        <img
          alt={`filled-star-${i + 1}`}
          id={`filled-star-${i + 1}`}
          key={`filled-star-${i + 1}`}
          value={i + 1}
          src={stars.singleFilledStar}
          className="indiv-star"
          onClick={props.handleRating}
        />
      );
    }
    let remaining = starDiv.length;
    while (remaining < 5) {
      const remainingUnfilledStars = (
        <img
          alt={`unfilled-star-${remaining + 1}`}
          id={`unfilled-star-${remaining + 1}`}
          key={`unfilled-star-${remaining + 1}`}
          value={remaining + 1}
          src={stars.singleUnfilledStar}
          className="indiv-star"
          onClick={props.handleRating}
        />
      );
      starDiv.push(remainingUnfilledStars);
      remaining++;
    }
    return starDiv;
  };
  return (
    <> {drawFilledStars()} </>
  );
};

export default StarRatingDynamic;