import React, {useEffect, useState} from 'react';
/* import star rating? */

const ProductCard = ({mockProduct, mockStyles}) => {
  console.log(mockStyles.results[0].photos[0].thumbnail_url);

  // function will need to filter the correct photo here later

  // function to have compare modal button/icon to go here

  return (
    <div style={{borderStyle: 'solid'}}/*id="productCard"style={{display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '60% 40%', gap: '0px 0px', borderStyle: 'solid', borderWidth: '2px', margin: '5px'}}*/>
      {/* button/icon to bring up compare modal will go here */}
      <div>
        <img src={mockStyles.results[0].photos[0].thumbnail_url}/>
      </div>
      <div>{mockProduct.category}</div>
      <div>{mockProduct.name + ', ' + mockProduct.slogan}</div>
      <div>{'$' + mockProduct.default_price}</div>
      <div>Star Rating</div>
    </div>
  );

};

export default ProductCard;