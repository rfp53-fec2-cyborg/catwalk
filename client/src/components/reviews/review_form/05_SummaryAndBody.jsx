import React from 'react';

const SummaryAndBody = (props) => {

  return (
    <>
      <div id="review-form-text">
        <label forhtml="summary"> Summary </label>
        <textarea name="summary" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
      </div>
      <div>
        <label forhtml="body"> Body </label>
        <textarea name="body" onChange={(e) => props.handleOnChange(e.target.name, e.target.value)} />
      </div>
    </>
  );
};

export default SummaryAndBody;