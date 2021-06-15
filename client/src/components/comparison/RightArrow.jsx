import React, { Component } from 'react';

const RightArrow = (props) => {
  return (
    <div className='frontArrow' onClick={this.props.goToNextSlide}>
      <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
    </div>
  );
};

export default RightArrow;