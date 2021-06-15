import React, {useEffect, useState} from 'react';
import UserOutfitCard from './UserOutfitCard.jsx';

const UserOutfitItems = (props) => {
  console.log(props.productStyles);
  return (
    <div>
      <h3>Your Outfit</h3>
      <div>
        {props.productStyles.map((productStyle, index) => {
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