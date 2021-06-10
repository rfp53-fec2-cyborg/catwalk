import React, { useState } from 'react';
import Rating from './Rating.jsx';
import Description from './Description.jsx';
import SocialMediaList from './SocialMediaList.jsx';

const Overview = ({ product, styles, cart, reviewsMeta }) => {
  const formatPrice = price => {
    price = '$' + price;
    if (price.slice(-3) === '.00') {
      price = price.slice(0, -3);
    }
    return price;
  };

  return (
    <div>
      <Rating reviewsMeta={reviewsMeta} />
      <p>{product.category}</p>
      <h1>{product.name}</h1>
      <p>{formatPrice(product.default_price)}</p>
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