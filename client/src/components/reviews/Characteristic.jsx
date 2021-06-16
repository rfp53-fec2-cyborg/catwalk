import React from 'react';
import downArrow from '../../assets/arrow-down.svg';

const characteristicDesc = {
  Size: ['Too small', 'Perfect', 'Too big'],
  Width: ['Too small', 'Perfect', 'Too big'],
  Comfort: ['Poor', '', 'Great'],
  Quality: ['Poor', '', 'Great'],
  Length: ['Too small', 'Perfect', 'Too big'],
  Fit: ['Too small', 'Perfect', 'Too big'],
};

const containerStyle = {
  width: '20%',
  position: 'relative',
  marginBottom: '10px',
};

const barStyle = {
  width: '100%',
  backgroundColor: '#e0e0de',
  height: '1em',
};

const fillerDesc = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
};

const desc = {
  fontSize: '13px',
  textAlign: 'center',
  padding: '1px'
};

const Characteristic = ({value}) => {

  const score = value.details.value;
  const percentage = Math.ceil(score / 5 * 100);

  const fillerStyle = {
    width: `${percentage}%`,
    textAlign: 'right',
  };

  return (
    <div style={containerStyle}>
      <div> {value.characteristic} </div>
      <div style={barStyle}>
        <div style={fillerStyle} > <img alt={`downArrow_${value.details.id}`} src={downArrow}/> </div>
      </div>
      <div style={fillerDesc} >
        {characteristicDesc[value.characteristic].map((value, index) =>
          <label key={index} style={desc} > {value}</label>
        )}
      </div>
    </div>
  );
};

export default Characteristic;