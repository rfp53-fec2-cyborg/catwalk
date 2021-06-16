import React, { Component } from 'react';

const LeftArrow = (props) => {
  return (
    <div className='backArrow' onClick={props.goToPrevSlide}>
      <i className='leftArrowIcon' aria-hidden='true'></i>
    </div>
  );
};

export default LeftArrow;