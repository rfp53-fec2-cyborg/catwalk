import React from 'React';
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
            reviewsMetaArr={this.state.reviewsMetaArr}
          />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;