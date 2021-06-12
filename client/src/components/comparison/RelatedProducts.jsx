import React from 'React';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = ({detaledRelatedProductsArr, mockStyles, mockProducts}) => {
  // console.log(mockProducts);

  return (
    <div>
      <h3>Related Products</h3>
      <div id="productsContainer"style={{display: 'grid', gridTemplateColumns: '250px 250px 250px 250px 250px', gridTemplateRows: '375px, gap: 0px 0px', padding: '0px', margin: '20px 40px 20px', overflow: scroll}}>
        {mockProducts && mockProducts.length > 0 && mockProducts.map((mockProduct, index) => {
          return <ProductCard
            key={index}
            mockProduct={mockProduct}
            mockStyles={mockStyles}
          />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;