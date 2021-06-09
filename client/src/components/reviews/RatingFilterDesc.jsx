import React from 'react';

const RatingFilterDesc = (props) => {

  console.log(props.data);

  if (props.data.length !== 0) {
    return (
      <>
        <div>
          Reviews are filtered by these ratings: {props.data.reduce((accumulator, value, index) => {
            if (index === props.data.length - 1) {
              return accumulator + value + ' stars ';
            } else {
              return accumulator + value + ' stars, ';
            }
          }, '')}
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