import React, { useState, useEffect } from 'react';
import Requester from '../../Requester.js';
import Gallery from './Gallery.jsx';
import Rating from './Rating.jsx';
import Styles from './Styles.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';
import Description from './Description.jsx';
import SocialMediaList from './SocialMediaList.jsx';

const requester = Requester();

const Overview = ({ product, styles, cart, reviewsMeta }) => {

  const selectedSkuIdDefault = '';
  const selectedQuantityDefault = 1;

  // State
  const [showWarning, setShowWarning] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedSkuId, setSelectedSkuId] = useState(selectedSkuIdDefault);
  const [selectedQuantity, setSelectedQuantity] = useState(selectedQuantityDefault);
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  // Effects
  useEffect(() => {
    const skus = skusToArray(selectedStyle.skus);
    const hasNoStock = skus.every(sku => {
      return sku.quantity === 0;
    });
    setIsOutOfStock(!isOutOfStock);
    setIsOutOfStock(hasNoStock);
  }, [selectedStyle]);

  useEffect(() => {
    setShowWarning(false);
    setSelectedStyle(styles[0]);
    setSelectedSkuId(selectedSkuIdDefault);
    setSelectedQuantity(selectedQuantityDefault);
    setIsOutOfStock(false);
  }, [product]);

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
    setSelectedQuantity(Number.parseInt(quantity));
  };

  const handleAddToCart = (event) => {
    if (selectedSkuId === '') {
      setShowWarning(true);
      setTimeout(setShowWarning, 5000, false);
      // TODO: open drop-down. After lots of googling, this does not seem possible
    } else {
      // Should we clear the size and quantity dropdowns afterwards?
      Promise.all([...Array(selectedQuantity).keys()].map(index => {
        return requester.addToCart({'sku_id': selectedSkuId});
      }))
        .then(() => {
          return requester.getCart();
        })
        .then((cart) => {
          console.log('skuID:', selectedSkuId);
          console.log('cart:', cart);
        })
        .catch(err => {
          console.log(err);
        });
    }
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
    <div className='overview-container'>
      <Gallery
        key={selectedStyle.style_id}
        selectedStyle={selectedStyle}
      />
      <div className='product-details'>
        <Rating reviewsMeta={reviewsMeta} />
        <h5>{product.category}</h5>
        <h1>{product.name}</h1>
        <h5>{formatPrice(product.default_price)}</h5>
        <Styles
          styles={styles}
          selectedStyle={selectedStyle}
          handleStyleClick={handleStyleClick}
          handleSkuSelection={handleSkuSelection}
        />
        <div className='cart-controls'>
          <SizeSelector
            showWarning={showWarning}
            isOutOfStock={isOutOfStock}
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
          <AddToCart
            isOutOfStock={isOutOfStock}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
      <div className='product-description'>
        {
          product.description ?
            <Description description={product.description} slogan={product.slogan} /> :
            null
        }
        <SocialMediaList />
      </div>
    </div>
  );
};

export default Overview;