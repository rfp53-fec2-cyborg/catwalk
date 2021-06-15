import React from 'react';

const RatingBar = (props) => {

  const percentage = Math.ceil(props.ratingCount / props.ratingOverview.maxRating * 100);
  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#58BC33',
    textAlign: 'right',
  };

  return (
    <div className="progress-container" >
      <div className="progress-bar">
        <div style={fillerStyles} > {props.ratingCount} </div>
      </div>
    </div>
  );
};

export default RatingBar;