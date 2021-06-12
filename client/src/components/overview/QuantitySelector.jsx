import React from 'react';

const QuantitySelector = ({quantity, handleQuantitySelection}) => {

  const max = Math.min(quantity, 15);
  const entries = max ?
    [...Array(max).keys()].map(index => {
      index += 1;
      return (
        <option
          value={index}
          key={index}>
          {index}
        </option>
      );
    }) :
    (<option
      value=''
      key='0'>
      -
    </option>);

  return (
    <>
      <label htmlFor='quantity-select'></label>
      <select
        id='quantity-select'
        disabled={!max}
        onChange={handleQuantitySelection}>
        {entries}
      </select>
    </>
  );
};

export default QuantitySelector;