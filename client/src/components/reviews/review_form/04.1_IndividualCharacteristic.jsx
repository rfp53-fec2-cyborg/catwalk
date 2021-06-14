import React, { useState } from 'react';
import Description from './04.2_Description.jsx';

const characteristicDescription = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
};

const IndividualCharacteristic = ({value}) => {

  console.log(value);

  const id = value.details.id;
  const characteristic = value.characteristic;

  return (
    <>
      <div key={`${characteristic}-${id}`}>
        <span>
          {characteristicDescription[value.characteristic].map((desc, index) => {
            let rating = index + 1;
            return (
              <>
                <label htmlFor={id} key={`${id}-${rating}`} > {rating} </label>
                <input name={id} value={rating} type="radio" />
              </>
            );
          })}
        </span>
      </div>
      <Description characteristic={value.characteristic} />
    </>
  );
};

export default IndividualCharacteristic;