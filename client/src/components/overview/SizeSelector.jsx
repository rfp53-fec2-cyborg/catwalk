import React from 'react';

const SizeSelector = ({skus, handleSkuSelection}) => {

  const isOutOfStock = skus.every(sku => {
    return sku.quantity === 0;
  });

  const outOfStockMenu = () => {
    return (
      <option value = ''>OUT OF STOCK</option>
    );
  };

  const inStockMenu = () => {
    return (
      <>
        <option value=''>SELECT SIZE</option>
        {skus.map((sku, index) => {
          if (sku.quantity > 0) {
            return (
              <option
                value={sku.id}
                key={sku.id}>
                {sku.size}
              </option>
            );
          }
        })}
      </>
    );
  };

  return (
    <>
      <label htmlFor='size-select'></label>
      <select
        id='size-select'
        disabled={isOutOfStock}
        onChange={handleSkuSelection}>
        {isOutOfStock ?
          outOfStockMenu() :
          inStockMenu()
        }
      </select>
    </>
  );
};

export default SizeSelector;