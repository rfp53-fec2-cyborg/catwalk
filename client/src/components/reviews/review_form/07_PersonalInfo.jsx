import React from 'react';

const PersonalInfo = (props) => {
  return (
    <>
      <div id="review-form-name">
        <label htmlFor="form-name"> Name </label>
        <div>
          <input id="form-name" name="name" placeholder="jackson11!" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
        </div>
        <div className="caution-message"> For privacy reasons, do not use your full name or email address. </div>
        <div className="error-message">{props.formErrorMessages.name_errorMsg}</div>
      </div>
      <div id="review-form-email">
        <label htmlFor="form-email"> Email </label>
        <div>
          <input id="form-email" type="email" name="email" placeholder="Example: jackson11@email.com" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
        </div>
        <div className="caution-message"> For authentication reasons, you will not be emailed </div>
        <div className="error-message">{props.formErrorMessages.email_errorMsg}</div>
      </div>
    </>
  );
};

export default PersonalInfo;