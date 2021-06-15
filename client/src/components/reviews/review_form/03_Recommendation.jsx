import React, { useState } from 'react';

const Recommendation = (props) => {

  return (
    <div id="review-form-recommendation">
    Do you recommend this product?
      <label htmlFor="form-radio-yes"> Yes </label>
      <input id="form-radio-yes" type="radio" name="recommend" onChange={(e) => props.handleOnChange(e.target.name, true)}/>
      <label htmlFor="form-radio-no"> No </label>
      <input id="form-radio-no" type="radio" name="recommend" onChange={(e) => props.handleOnChange(e.target.name, false)}/>
    </div>
  );

};

export default Recommendation;


