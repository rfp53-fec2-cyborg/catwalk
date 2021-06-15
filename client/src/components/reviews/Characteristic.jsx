import React from 'react';
import downArrow from '../../assets/down-arrow.svg';

const characteristicDesc = {
  Size: ['Too small', 'Perfect', 'Too big'],
  Width: ['Too small', 'Perfect', 'Too big'],
  Comfort: ['Poor', '', 'Great'],
  Quality: ['Poor', '', 'Great'],
  Length: ['Too small', 'Perfect', 'Too big'],
  Fit: ['Too small', 'Perfect', 'Too big'],
};

const Characteristic = ({value}) => {

  const score = value.details.value;
  const percentage = Math.ceil(score / 5 * 100);

  const fillerStyle = {
    width: `${percentage}%`,
    textAlign: 'right',
  };

  return (
    <div className="progress-container" >
      <div> {value.characteristic} </div>
      <div className="progress-bar" >
        <div style={fillerStyle} > <img alt={`downArrow_${value.details.id}`} src={downArrow}/> </div>
      </div>
      <div className="progress-filler-desc" >
        {characteristicDesc[value.characteristic].map((value, index) =>
          <label key={index} className="progress-desc" > {value}</label>
        )}
      </div>
    </div>
  );
};

export default Characteristic;