import React from 'react';

const fillerStyles = {
  height: '100%',
  borderRadius: 'inherit',
};

const progressBar = {
  padding: '5',
  color: 'white',
  fontWeight: 'bold'
};

const RatingBar = ({value, max}) => {

  const percentage = Math.ceil(value / max * 100);
  const containerStyles = {
    height: '1em',
    width: '12.5%',
    backgroundColor: '#e0e0de',
  };

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#58BC33',
    textAlign: 'right',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}> {value} </div>
    </div>
  );
};

export default RatingBar;