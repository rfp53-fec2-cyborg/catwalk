import React from 'react';

const RatingBar = (props) => {

  const percentage = Math.ceil(props.ratingCount / props.ratingOverview.maxRating * 100);
  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#4aa564',
    textAlign: 'right',
    color: '#212121'
  };

  return (
    <div className="progress-box" >
      <div className="progress-bar">
        <div style={fillerStyles} > {props.ratingCount} </div>
      </div>
    </div>
  );
};

export default RatingBar;