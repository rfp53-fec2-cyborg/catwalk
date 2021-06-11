import React, { useState, useEffect } from 'react';
import Rating from './Rating.jsx';
import Styles from './Styles.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import Description from './Description.jsx';
import SocialMediaList from './SocialMediaList.jsx';

const Overview = ({ product, styles, cart, reviewsMeta }) => {

  const selectedSkuIdDefault = '';
  const selectedQuantityDefault = 1;

  // State
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedSkuId, setSelectedSkuId] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // // TODO: remove this (just for development)
  // useEffect(() => {
  //   console.log({
  //     selectedStyle,
  //     selectedSkuId,
  //     selectedQuantity
  //   });
  // });

  // Event handlers
  const handleStyleClick = (event) => {
    const styleID = event.target.dataset.id;
    setSelectedSkuId(selectedSkuIdDefault);
    setSelectedQuantity(selectedQuantityDefault);
    setSelectedStyle(getStyleById(styleID));
  };

  const handleSkuSelection = (event) => {
    const skuId = event.target.value.toString();
    setSelectedSkuId(skuId);
  };

  const handleQuantitySelection = (event) => {
    const quantity = event.target.value;
    setSelectedQuantity(quantity);
  };

  // Utilities
  const formatPrice = price => {
    price = '$' + price;
    if (price.slice(-3) === '.00') {
      price = price.slice(0, -3);
    }
    return price;
  };

  const getStyleById = (styleID) => {
    for (let i = 0; i < styles.length; i++) {
      if (styles[i]['style_id'].toString() === styleID) {
        return styles[i];
      }
    }
    return undefined;
  };

  const skusToArray = (skus) => {
    const skusArray = [];
    for (const id in skus) {
      skusArray.push({
        id,
        quantity: skus[id].quantity,
        size: skus[id].size
      });
    }
    return skusArray;
  };

  return (
    <div>
      <Rating reviewsMeta={reviewsMeta} />
      <p>{product.category}</p>
      <h1>{product.name}</h1>
      <p>{formatPrice(product.default_price)}</p>
      <Styles
        styles={styles}
        selectedStyle={selectedStyle}
        handleStyleClick={handleStyleClick}
        handleSkuSelection={handleSkuSelection}
      />
      <SizeSelector
        skus={skusToArray(selectedStyle.skus)}
        selectedSkuId={selectedSkuId}
        handleSkuSelection={handleSkuSelection}
      />
      <QuantitySelector
        quantity={selectedSkuId ?
          selectedStyle.skus[selectedSkuId].quantity :
          0}
        handleQuantitySelection={handleQuantitySelection}
      />
      {
        product.description ?
          <Description description={product.description} slogan={product.slogan} /> :
          null
      }
      <SocialMediaList />
    </div>
  );
};

export default Overview;