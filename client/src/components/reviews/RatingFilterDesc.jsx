import React from 'react';

const RatingFilterDesc = (props) => {

  if (props.data.length !== 0) {
    return (
      <>
        <div>
          Reviews are filtered by these ratings: {props.data.join(', ')}
        </div>
        <span value={[]} onClick={() => props.setRating([])}>
          Remove all filters.
        </span>
      </>
    );
  }
  return null;
};

export default RatingFilterDesc;