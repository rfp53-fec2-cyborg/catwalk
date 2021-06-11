import React from 'react';

const PersonalInfo = (props) => {
  return (
    <>
      <div id="review-form-personalInfo">
        <label forhtml="name"> Username </label>
        <input name="name" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
      </div>
      <div>
        <label forhtml="email"> Email </label>
        <input name="email" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
      </div>
    </>
  );
};

export default PersonalInfo;