import React, {useEffect, useState} from 'react';
import ProductCardDetails from './ProductCardDetails.jsx';
/* import star rating? */

const ProductCard = ({detaledRelatedProduct, relatedProductsStylesArr}) => {
  // console.log(detaledRelatedProduct.id);
  let currentId = detaledRelatedProduct.id;
  // console.log(relatedProductsStylesArr);

  // function will need to filter the correct photo here later
  const getTheCorrectPic = (relatedProductsStylesArr, currentId) => {
    let possiblePicUrls = [];
    for (let i = 0; i < relatedProductsStylesArr.length; i++) {
      let current = relatedProductsStylesArr[i];
      if (Number(current.product_id) === currentId) {
        possiblePicUrls.push(current);
      }
    }
    // console.log(possiblePicUrls);
    if (possiblePicUrls[0]) {
      if (possiblePicUrls[0].results[0].photos[0].thumbnail_url) {
        let urlPic = possiblePicUrls[0].results[0].photos[0].thumbnail_url;
        return urlPic;
      }
    }
  };
  // const image = relatedProductsStylesArr[1].results[0].photos[0].thumbnail_url;

  // function to have compare modal button/icon to go here

  return (
    <div>
      {/* button/icon to bring up compare modal will go here */}
      <div>
        <img src={getTheCorrectPic(relatedProductsStylesArr, currentId)} alt='Image Not Available'/>
      </div>
      <ProductCardDetails detaledRelatedProduct={detaledRelatedProduct} relatedProductsStylesArr={relatedProductsStylesArr}/>
      <div>Star Rating</div>
    </div>
  );

};

export default ProductCard;