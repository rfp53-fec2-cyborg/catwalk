import React from 'react';
import ProductCard from './ProductCard.jsx';


const RelatedProducts = ({detailedRelatedProductsArr, relatedProductsStylesArr, reviewsMetaArr, addRatingsMeta, currentReviewChars}) => {

  return (
    <div>
      <h3 className='relatedProductTitle'>Related Products</h3>
      <div className='relatedProductsContainer'>
        {detailedRelatedProductsArr.map((detailedRelatedProduct, index) => {
          return <ProductCard
            key={index}
            detailedRelatedProduct={detailedRelatedProduct}
            currentId={detailedRelatedProduct.id}
            relatedProductsStylesArr={relatedProductsStylesArr}
            reviewsMetaArr={reviewsMetaArr}
            addRatingsMeta={addRatingsMeta}
            currentReviewChars={currentReviewChars}
          />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;