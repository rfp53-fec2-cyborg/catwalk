import React, {useEffect, useState} from 'react';
import StarRating from '../shared/StarRating.jsx';


const ProductCardDetails = ({detailedRelatedProduct, relatedProductsStylesArr, currentReviewMeta, handleNewProductOnClick, currentRelatedProductStyle}) => {

  return (
    <div className='productCardDetails' onClick={()=>(handleNewProductOnClick(detailedRelatedProduct.id))}>
      <div>{detailedRelatedProduct.category}</div>
      <div>{detailedRelatedProduct.name}</div>
      <div>{'$' + detailedRelatedProduct.default_price}</div>
      <StarRating score={currentReviewMeta[0].ratings.roundedValue}/>
    </div>
  );
};

export default ProductCardDetails;
