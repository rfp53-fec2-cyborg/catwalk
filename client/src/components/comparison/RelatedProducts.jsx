import React from 'react';
import ProductCard from './ProductCard.jsx';


const RelatedProducts = ({detailedRelatedProductsArr, relatedProductsStylesArr}) => {

  return (
    <div>
      <h3>Related Products</h3>
      <div>
        {detailedRelatedProductsArr.map((detailedRelatedProduct, index) => {
          return <ProductCard
            key={index}
            detailedRelatedProduct={detailedRelatedProduct}
            relatedProductsStylesArr={relatedProductsStylesArr}
          />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;