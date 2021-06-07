import React, { useState } from 'react';
import StarRating from '../shared/StarRating.jsx';
import Description from './Description.jsx';
import SocialMediaList from './SocialMediaList.jsx';
import { product } from '../../../mock-data/product.js';
import { reviewsMeta } from '../../../mock-data/reviewsMeta.js';

const Overview = (props) => {
  const [category, setCategory] = useState(product.category);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.default_price);

  const formatPrice = price => {
    price = '$' + price;
    if (price.slice(-3) === '.00') {
      price = price.slice(0, -3);
    }
    return price;
  };

  return (
    <div>
      <StarRating ratings={reviewsMeta.ratings} />
      <p>{category}</p>
      <h1>{name}</h1>
      <p>{formatPrice(price)}</p>
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