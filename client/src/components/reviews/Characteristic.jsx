import React from 'react';

const containerStyles = {
  width: '20%',
  backgroundColor: '#e0e0de',
  position: 'relative'
};

const characteristicDesc = {
  Size: ['Too small', 'Perfect', 'Too big'],
  Width: ['Too small', 'Perfect', 'Too big'],
  Comfort: ['Poor', '', 'Perfect'],
  Quality: ['Poor', '', 'Perfect'],
  Length: ['Too small', 'Perfect', 'Too big'],
  Fit: ['Too small', 'Perfect', 'Too big'],
};

const fillerDesc = {
  display: 'flex',
  justifyContent: 'space-between',
};

const desc = {
  fontSize: '14px',
  textAlign: 'center',
};

const Characteristic = ({value}) => {

  const score = value.details.value;
  const percentage = Math.ceil(score / 5 * 100);
  const fillerStyles = {
    width: `${percentage}%`,
    textAlign: 'right',
  };

  return (
    <div>
      <div> {value.characteristic} </div>
      <div style={containerStyles}>
        <div style={fillerStyles} > V </div>
        <div style={fillerDesc} >
          <div style={desc} > {characteristicDesc[value.characteristic][0]}</div>
          <div style={desc} > {characteristicDesc[value.characteristic][1]}</div>
          <div style={desc} > {characteristicDesc[value.characteristic][2]}</div>
        </div>
      </div>
    </div>
  );
};

export default Characteristic;