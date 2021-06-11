import React, { useState } from 'react';
import stars from '../../assets/stars/index.js';
import StarRating from '../shared/StarRating.jsx';

const starStyle = {
  width: '22.5px',
  height: '22.5px'
};

const relatedStarRating = {
  '1.00': 'Poor',
  '2.00': 'Fair',
  '3.00': 'Average',
  '4.00': 'Good',
  '5.00': 'Great'
};

const ModalReviewStars = () => {
  const [state, setState] = useState({
    rating: 0,
    areStarsDrawn: false,
  });

  const drawUnfilledStars = () => {
    const starDiv = [];
    for (var i = 0; i < 5; i++) {
      starDiv.push(
        <img
          key={`star_${i}`}
          value={i + 1}
          src={stars.singleUnfilledStar}
          style={starStyle}
          onClick={drawFilledStars}
        />
      );
    }
    return starDiv;
  };

  const drawFilledStars = (e) => {
    const rating = e ? e.target.getAttribute('value') : 0;
    setState({rating: `${rating}.00`, areStarsDrawn: true});
  };

  return (
    <div>
      {state.areStarsDrawn === false
        ? drawUnfilledStars()
        : <> <StarRating score={state.rating}/> {relatedStarRating[state.rating]} </>
      }
    </div>
  );

};

export default ModalReviewStars;


