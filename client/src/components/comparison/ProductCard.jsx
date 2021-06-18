import React, {useEffect, useState} from 'react';
import ProductCardDetails from './ProductCardDetails.jsx';
import DefaultPic from '../../components/shared/LoadingSpinner.jsx';
import { MakeRating } from '../../helpers/MakeRating.js';

const ProductCard = ({detailedRelatedProduct, relatedProductsStylesArr, reviewsMetaArr, currentId, addRatingsMeta, currentReviewChars, handleNewProductOnClick}) => {

  const currentReviewsMeta = (reviewsMetaArr, currentId) => {
    return reviewsMetaArr.filter(element => {
      if (element.product_id === `${currentId}`) {
        return element;
      }
    });
  };
  const currentReviewMeta = currentReviewsMeta(reviewsMetaArr, currentId);

  const currentRelatedProductsStyle = (relatedProductsStylesArr, currentId) => {
    return relatedProductsStylesArr.filter(element => {
      if (element.product_id === `${currentId}`) {
        return element;
      }
    });
  };
  const currentRelatedProductStyle = currentRelatedProductsStyle(relatedProductsStylesArr, currentId);

  const defaultPic = 'https://i.imgur.com/R7mqXKL.png';

  const getTheCorrectPic = (relatedProductsStylesArr, currentId) => {
    let possiblePicUrls = [];
    for (let i = 0; i < relatedProductsStylesArr.length; i++) {
      let current = relatedProductsStylesArr[i];
      if (Number(current.product_id) === currentId) {
        possiblePicUrls.push(current);
      }
    }
    if (possiblePicUrls[0]) {
      if (possiblePicUrls[0].results[0].photos[0].thumbnail_url) {
        let urlPic = possiblePicUrls[0].results[0].photos[0].thumbnail_url;
        return urlPic;
      }
    }
  };

  return (
    <div className='productCard'>
      {/* button/icon to bring up compare modal will go here */}
      <div className='relatedProductImage'>
        <img className='relatedProductImage' src={getTheCorrectPic(relatedProductsStylesArr, currentId) || defaultPic} alt='Image Not Available'/>
      </div>
      <ProductCardDetails
        detailedRelatedProduct={detailedRelatedProduct}
        relatedProductsStylesArr={relatedProductsStylesArr}
        reviewsMetaArr={reviewsMetaArr}
        currentReviewMeta={currentReviewMeta}
        score={currentReviewMeta[0].ratings.roundedValue}
        handleNewProductOnClick={handleNewProductOnClick}
      />
    </div>
  );

};

export default ProductCard;