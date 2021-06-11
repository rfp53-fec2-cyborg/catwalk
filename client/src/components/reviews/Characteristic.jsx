import React from 'react';

const containerStyles = {
  height: '1em',
  width: '20%',
  backgroundColor: '#e0e0de',
};

const characteristicDesc = {
  Size: ['Too small', 'Perfect', 'Too big'],
  Width: ['Too small', 'Perfect', 'Too big'],
  Comfort: ['Poor', 'Medium', 'Perfect'],
  Quality: ['Poor', 'Medium', 'Perfect'],
  Length: ['Too small', 'Perfect', 'Too big'],
  Fit: ['Too small', 'Perfect', 'Too big'],
};

const Characteristic = (props) => {
  const value = props.details;
  const percentage = Math.ceil(value / 5 * 100);
  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    textAlign: 'right',
  };

  const fillerDesc = {
    height: '100%',
    width: `${percentage}%`,
  };

  return (
    <>
      <div style={containerStyles}>
        <div style={fillerStyles} > V </div>
      </div>
      <div style={fillerDesc} > Desc here </div>
    </>
  );
};

export default Characteristic;