import React, { useState } from 'react';
import Rating from './Rating.jsx';
import Styles from './Styles.jsx';
import Description from './Description.jsx';
import SocialMediaList from './SocialMediaList.jsx';

const Overview = ({ product, styles, cart, reviewsMeta }) => {

  // State
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);

  // Event handlers
  const handleStyleClick = (event) => {
    const styleID = event.target.dataset.id;
    setSelectedStyle(getStyleById(styleID));
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