import React from 'react';

const AddToCart = ({ isOutOfStock, handleAddToCart }) => {
  return (
    <>
      {isOutOfStock ?
        null :
        <button onClick={handleAddToCart}>
          Add to Cart
        </button>
      }
    </>
    // <button onClick={handleAddToCart}>
    //   Add to Cart
    // </button>
  );
};

export default AddToCart;