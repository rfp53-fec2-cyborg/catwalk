import React from 'React';
import ProductCard from './ProductCard.jsx';


const RelatedProducts = ({detaledRelatedProductsArr, relatedProductsStylesArr}) => {
  // console.log(detaledRelatedProductsArr);
  // console.log(relatedProductsStylesArr);

  return (
    <div>
      <h3>Related Products</h3>
      <div id="productsContainer"style={{display: 'grid', gridTemplateColumns: '250px 250px 250px 250px 250px', gridTemplateRows: '375px, gap: 0px 0px', padding: '0px', margin: '20px 40px 20px', overflow: scroll}}>
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