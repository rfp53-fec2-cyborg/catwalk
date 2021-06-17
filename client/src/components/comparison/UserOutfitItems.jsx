import React, {useEffect, useState} from 'react';
import UserOutfitCard from './UserOutfitCard.jsx';

const UserOutfitItems = ({relatedProductsStylesArr}) => {

  return (
    <div>
      <h3 className='relatedProductTitle'>Your Outfit</h3>
      <div className='relatedProductsContainer'>
        {relatedProductsStylesArr.map((productStyle, index) => {
          return <UserOutfitCard
            key={index}
            productStyle={productStyle}
          />;
        })}
      </div>
    </div>
  );
};

export default UserOutfitItems;