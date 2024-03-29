import React from 'react';
import stars from '../../assets/stars/index.js';

const StarRating = ({ score }) => {
  const style = {
    height: '20px',
    width: '110px'
  };

  if (score > 5) {
    score = 5;
  }
  if (score < 0) {
    score = 0;
  }

  let image = score => {
    const scoreArr = score.split('.');
    return `i${scoreArr[0]}${scoreArr[1]}`;
  };

  return (
    <img src={stars[image(score)]} style={style} alt="Picture of how ratings this product or review has"/>
  );
};

export default StarRating;