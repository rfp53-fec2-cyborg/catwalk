import React, {useEffect, useState} from 'react';
import UserOutfitCard from './UserOutfitCard.jsx';

const UserOutfitItems = (props) => {
  console.log(props.productStyles);
  return (
    <div>
      <h3>Your Outfit</h3>
      <div id="productsContainer"style={{display: 'grid', gridTemplateColumns: '250px 250px 250px 250px 250px', gridTemplateRows: '375px, gap: 0px 0px', padding: '0px', margin: '20px 40px 20px', overflow: scroll}}>
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