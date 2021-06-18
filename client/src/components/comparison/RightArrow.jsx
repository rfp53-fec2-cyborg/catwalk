import React, { Component } from 'react';
import arrowRight from '../../assets/arrow-right.svg';

const RightArrow = ({scrollComparisonRight}) => {
  return (
    <div
      className='rightArrow'
      onClick={scrollComparisonRight}
    >
      <img src={arrowRight} alt="Right arrow to go right"></img>
    </div>
  );
};

export default RightArrow;