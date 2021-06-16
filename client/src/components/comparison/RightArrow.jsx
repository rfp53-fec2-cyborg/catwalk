import React, { Component } from 'react';

const RightArrow = (props) => {
  return (
    <div className='frontArrow' onClick={props.goToNextSlide}>
      <i className='rightArrowIcon' aria-hidden='true'></i>
    </div>
  );
};

export default RightArrow;