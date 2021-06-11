import React from 'react';

const SizeSelector = ({skus, handleSkuSelection}) => {
  return (
    <>
      <label htmlFor='size-select'></label>
      <select id='size-select' onChange={handleSkuSelection}>
        <option value=''>SELECT SIZE</option>
        {skus.map((sku, index) => {
          if (sku.quantity > 0) {
            return (
              <option
                value={sku.id}
                key={sku.id}>
                {sku.size}
              </option>);
          }
        })}
      </select>
    </>
  );
};

export default SizeSelector;