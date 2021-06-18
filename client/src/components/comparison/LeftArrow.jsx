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

export default LeftArrow;