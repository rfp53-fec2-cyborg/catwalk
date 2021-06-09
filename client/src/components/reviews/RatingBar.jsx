import React from 'react';

const containerStyles = {
  height: '1em',
  width: '15%',
  backgroundColor: '#e0e0de',
};

const RatingBar = (props) => {

  const percentage = Math.ceil(props.data.ratingCount / props.data.max * 100);
  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#58BC33',
    textAlign: 'right',
  };

  return (
    <div style={containerStyles}>
      <div value={props.data.rating} style={fillerStyles} > {props.data.ratingCount} </div>
    </div>
  );
};

export default RatingBar;