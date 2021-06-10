import React from 'react';

const containerStyles = {
  height: '1em',
  width: '15%',
  backgroundColor: '#e0e0de',
};

const RatingBar = (props) => {

  const percentage = Math.ceil(props.ratingCount / props.ratingOverview.maxRating * 100);
  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#58BC33',
    textAlign: 'right',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} > {props.ratingCount} </div>
    </div>
  );
};

export default RatingBar;