import React, {useEffect, useState} from 'react';

const ProductCardDetails = ({detailedRelatedProduct, relatedProductsStylesArr}) => {

  let currentId = detailedRelatedProduct.id;

  return (
    <>
      <div>{detailedRelatedProduct.category}</div>
      <div>{detailedRelatedProduct.name}</div>
      <div>{'$' + detailedRelatedProduct.default_price}</div>
    </>
  );
};

export default ProductCardDetails;