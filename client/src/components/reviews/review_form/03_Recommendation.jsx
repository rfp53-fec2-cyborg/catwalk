import React, { useState } from 'react';

const Recommendation = (props) => {

  return (
    <div id="review-form-recommendation">
    Do you recommend this product?
      <label forhtml="isRecommended"> Yes </label>
      <input type="radio" name="recommend" onChange={(e) => props.handleOnChange(e.target.name, true)}/>
      <label forhtml="isRecommended"> No </label>
      <input type="radio" name="recommend" onChange={(e) => props.handleOnChange(e.target.name, false)}/>
    </div>
  );

};

export default Recommendation;


