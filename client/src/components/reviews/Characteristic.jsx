import React from 'react';

const containerStyles = {
  height: '1em',
  width: '15%',
  backgroundColor: '#e0e0de',
};

const Characteristic = ({value}) => {

  const percentage = Math.ceil(value / 5 * 100);
  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    textAlign: 'right',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} > </div>
    </div>
  );
};

export default Characteristic;