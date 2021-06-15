import React, {useEffect, useState} from 'react';

const ProductCardDetails = ({detaledRelatedProduct, relatedProductsStylesArr}) => {

  let currentId = detaledRelatedProduct.id;
  // console.log('styles', relatedProductsStylesArr);
  // console.log('detales', detaledRelatedProduct);



  return (
    <>
      <div>{detaledRelatedProduct.category}</div>
      <div>{detaledRelatedProduct.name}</div>
      <div>{'$' + detaledRelatedProduct.default_price}</div>
    </>
  );
};

export default ProductCardDetails;