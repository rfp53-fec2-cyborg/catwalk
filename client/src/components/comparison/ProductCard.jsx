import React, {useEffect, useState} from 'react';
import ProductCardDetails from './ProductCardDetails.jsx';
import DefaultPic from '../../components/shared/LoadingSpinner.jsx';
import { MakeRating } from '../../helpers/MakeRating.js';
import StarRating from '../shared/StarRating.jsx';

const ProductCard = ({detailedRelatedProduct, relatedProductsStylesArr, reviewsMetaArr, currentId, addRatingsMeta, currentReviewChars}) => {

  // console.log('relatedProductsStylesArr', relatedProductsStylesArr);
  // console.log('reviewsMetaArr', reviewsMetaArr[0].ratings.roundedValue);

  const currentReviewsMeta = (reviewsMetaArr, currentId) => {
    return reviewsMetaArr.filter(element => {
      if (element.product_id === `${currentId}`) {
        return element;
      }
    });
  };
  const currentReviewMeta = currentReviewsMeta(reviewsMetaArr, currentId);
  // console.log(currentReviewMeta[0].ratings.roundedValue);

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
    <div>
      {/* button/icon to bring up compare modal will go here */}
      <div>
        <img src={getTheCorrectPic(relatedProductsStylesArr, currentId) || defaultPic} alt='Image Not Available'/>
      </div>
      <ProductCardDetails
        detailedRelatedProduct={detailedRelatedProduct}
        relatedProductsStylesArr={relatedProductsStylesArr}
        reviewsMetaArr={reviewsMetaArr}
        currentReviewMeta={currentReviewMeta}
      />
      <StarRating score={currentReviewMeta[0].ratings.roundedValue}/>
    </div>
  );

};

export default ProductCard;