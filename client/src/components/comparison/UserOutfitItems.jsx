import React, {useEffect, useState} from 'react';
import UserOutfitCard from './UserOutfitCard.jsx';
import BlankUserOutfitCard from './BlankUserOutfitCard.jsx';

const UserOutfitItems = ({outfitList}) => {
  return (
    <div>
      <h3 className='relatedProductTitle'>Your Outfit</h3>
      <div className='UserOutfitContainer'>
        { outfitList.length > 0 ?
          outfitList.map((productStyle, index) => {
            return <UserOutfitCard
              key={index}
              productStyle={productStyle}
            />;
          }) : <BlankUserOutfitCard /> }
      </div>
    </div>
  );
};

export default UserOutfitItems;