import React, {useEffect, useState} from 'react';
import imageNotFound from '../../assets/image_not_found-min.png';

const BlankUserOutfitCard = (props) => {

  const defaultPic = imageNotFound;

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