import React, { Component } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';

const LeftArrow = ({scrollComparisonLeft}) => {
  return (
    <div
      className='leftArrow'
      onClick={scrollComparisonLeft}
    >
      <img src={arrowLeft}></img>
    </div>
  );
};


// const Arrow = ({ direction, clickHandler, classStr, imgSrc }) => {
//   return (
//     <div
//       className={`${classStr} ${direction}`}
//       data-direction={direction}
//       onClick={clickHandler}
//     >
//       <img src={imgSrc}></img>
//     </div>
//   );
// };

export default LeftArrow;