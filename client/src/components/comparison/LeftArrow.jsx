import React, { Component } from 'react';

const LeftArrow = (props) => {
  return (
    <div className='backArrow' onClick={this.props.goToPrevSlide}>
      <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
    </div>
  );
};

export default LeftArrow;