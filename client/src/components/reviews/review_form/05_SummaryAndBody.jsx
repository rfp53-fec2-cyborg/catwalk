import React from 'react';

const SummaryAndBody = (props) => {

  return (
    <>
      <div id="review-form-text">
        <label forhtml="summary"> Summary </label>
        <textarea name="summary" defaultValue="Example: Best purchase ever!" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
        <div className="error-message">{props.formErrorMessages.summary_errorMsg}</div>
      </div>
      <div>
        <label forhtml="body"> Body </label>
        <textarea name="body" defaultValue="Why did you like the product or not?" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
        <div className="error-message">{props.formErrorMessages.body_errorMsg}</div>
      </div>
    </>
  );
};

export default SummaryAndBody;