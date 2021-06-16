import React from 'react';

const RatingFilterDesc = (props) => {
  if (props.data.length !== 0) {
    return (
      <div>
        Reviews are filtered by these ratings: {props.data.reduce((accumulator, value, index) => {
          if (index === props.data.length - 1) {
            return accumulator + value + ' stars ';
          } else {
            return accumulator + value + ' stars, ';
          }
        }, '')}
        <span value={[]} onClick={() => props.setRatingFilter([])}>
          Remove all filters.
        </span>
      </div>
    );
  }
  return null;
};

export default RatingFilterDesc;