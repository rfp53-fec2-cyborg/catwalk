import React, { useState } from 'react';
import stars from '../../../assets/stars/index.js';
import StarRatingDynamic from '../../shared/StarRatingDynamic.jsx';

const relatedStarRating = {
  '1': 'Poor',
  '2': 'Fair',
  '3': 'Average',
  '4': 'Good',
  '5': 'Great'
};

const DrawDynamicStars = (props) => {
  const [state, setState] = useState({
    rating: 0,
    areStarsDrawn: false,
  });

  const drawUnfilledStars = () => {
    const starDiv = [];
    for (var i = 0; i < 5; i++) {
      starDiv.push(
        <img
          alt={`unfilled-star-${i + 1}`}
          id={`unfilled-star-${i + 1}`}
          key={`unfilled-star-${i + 1}`}
          value={i + 1}
          src={stars.singleUnfilledStar}
          className="indiv-star"
          onClick={handleRating}
        />
      );
    }
    return starDiv;
  };

  const handleRating = (e) => {
    const rating = e ? Number(e.target.getAttribute('value')) : 0;
    setState({rating: rating, areStarsDrawn: true});
    props.handleOnChange('rating', rating);
  };

  return (
    <div id="form-stars">
      {state.areStarsDrawn === false
        ? drawUnfilledStars()
        : <div data-testid="grading-description" > <StarRatingDynamic handleRating={handleRating} rating={state.rating} /> {relatedStarRating[state.rating]} </div>
      }
    </div>
  );

};

export default DrawDynamicStars;


