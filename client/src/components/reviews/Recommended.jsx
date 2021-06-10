import React from 'react';

const Recommended = ({recommendedData}) => {

  let max = Number(recommendedData.true) + Number(recommendedData.false);

  if (Number(recommendedData.true) > 0) {
    return (
      <>
        {Math.ceil(Number(recommendedData.true) / max * 100)}% of reviews recommend this product.
      </>
    );
  }
  return null;
};

export default Recommended;