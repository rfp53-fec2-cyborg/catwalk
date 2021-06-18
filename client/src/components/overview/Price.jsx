import React from 'react';

const Price = ({ selectedStyle }) => {

  const originalPrice = selectedStyle.original_price;
  const salePrice = selectedStyle.sale_price;

  const formatPrice = price => {
    if (!price) {
      return price;
    }
    price = '$' + price;
    if (price.slice(-3) === '.00') {
      price = price.slice(0, -3);
    }
    return price;
  };

  return (
    <div className="product-category-price">
      {salePrice ?
        <>
          <div className="original-price-with-sale">
            {formatPrice(originalPrice)}
          </div>
          <div className="sale-price">
            {formatPrice(salePrice)}
          </div>
        </> :
        <div>
          {formatPrice(originalPrice)}
        </div>
      }

    </div>
  );
};

export default Price;