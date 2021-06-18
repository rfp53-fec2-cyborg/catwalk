import React, {useEffect, useState} from 'react';

const BlankUserOutfitCard = (props) => {

  const defaultPic = 'https://i.imgur.com/R7mqXKL.png';

  return (
    <div className='productCard'>
      {/* button/icon to bring up compare modal will go here */}
      <div className='relatedProductImage'>
        <img className='relatedProductImage' src={defaultPic} alt='Image Not Found'/>
      </div>
      <div className='productCardDetails' onClick={()=>(handleNewProductOnClick(detailedRelatedProduct.id))}>
        <div>Add a product to the list!</div>
        <div></div>
        <div></div>
        {/* <StarRating score={currentReviewMeta[0].ratings.roundedValue}/> */}
      </div>
    </div>
  );
};

export default BlankUserOutfitCard;