import React from 'react';

const PersonalInfo = (props) => {
  return (
    <>
      <div id="review-form-name">
        <label forhtml="name"> Name </label>
        <input name="name" defaultValue="jackson11!" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
        <div className="error-message">{props.formErrorMessages.error_name}</div>
        <div className="caution-text"> For privacy reasons, do not use your full name or email address. </div>
      </div>
      <div id="review-form-email">
        <label forhtml="email"> Email </label>
        <input type="email" name="email" defaultValue="Example: jackson11@email.com" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
        <div className="error-message">{props.formErrorMessages.error_email}</div>
        <div className="caution-text"> For authentication reasons, you will not be emailed” will appear </div>
      </div>
    </>
  );
};

export default PersonalInfo;