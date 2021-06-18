import React, { Component } from 'react';
import arrowRight from '../../assets/arrow-right.svg';

const RightArrow = ({scrollComparisonRight}) => {
  return (
    <div
      className='rightArrow'
      onClick={scrollComparisonRight}
    >
      <img src={arrowRight}></img>
    </div>
  );
};

export default RightArrow;