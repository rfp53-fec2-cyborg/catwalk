import React from 'react';

const Recommended = (props) => {

  let recommended = props.data.recommended;
  let max = Number(recommended.true) + Number(recommended.false);

  if (Number(recommended.true) > 0) {
    return (
      <>
        {Math.ceil(Number(recommended.true) / max * 100)}% of users who bought this product recommends it.
      </>
    );
  } else {
    return (
      <>
        There are no recommendations for this product.
      </>
    );
  }
};

export default Recommended;