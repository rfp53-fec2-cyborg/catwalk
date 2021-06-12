import React from 'react';

const SummaryAndBody = (props) => {

  return (
    <>
      <div id="review-form-text">
        <label for="form-summary"> Summary </label>
        <textarea id="form-summary" name="form-summary" placeholder="Example: Best purchase ever!" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
        <div className="error-message">{props.formErrorMessages.summary_errorMsg}</div>
      </div>
      <div>
        <label for="body-summary"> Body </label>
        <textarea id="body-summary" name="body-summary" placeholder="Why did you like the product or not?" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
        <div className="error-message">{props.formErrorMessages.body_errorMsg}</div>
      </div>
    </>
  );
};

export default SummaryAndBody;