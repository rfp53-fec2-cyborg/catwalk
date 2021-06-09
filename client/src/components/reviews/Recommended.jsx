import React from 'react';

const Recommended = (props) => {

  let recommended = props.data.recommended;
  let max = Number(recommended.true) + Number(recommended.false);

  if (Number(recommended.true) > 0) {
    return (
      <>
        {Math.ceil(Number(recommended.true) / max * 100)}% of reviews recommend this product.
      </>
    );
  }
  return null;
};

export default Recommended;