import React from 'React';
import ProductCard from './ProductCard.jsx';


const RelatedProducts = ({detaledRelatedProductsArr, relatedProductsStylesArr}) => {
  // console.log(detaledRelatedProductsArr);
  // console.log(relatedProductsStylesArr);

  return (
    <div>
      <h3>Related Products</h3>
      <div>
        {detaledRelatedProductsArr.map((detaledRelatedProduct, index) => {
          return <ProductCard
            key={index}
            detaledRelatedProduct={detaledRelatedProduct}
            relatedProductsStylesArr={relatedProductsStylesArr}
          />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;