import React, { useState } from 'react';

const MarkAsHelpfulOrReport = (props) => {
  const [reportedStatus, setReportedStatus] = useState(false);

  return (
    <div> Was this review helpful?
      <u name="helpful" onClick={() => props.markReviewAsHelpful(props.reviewID)} > Yes </u> ({props.helpfulness})
      <div>
        <u onClick={() => {
          props.reportReview(props.reviewID);
          setReportedStatus(current => !current);
        }} > {!reportedStatus ? 'Report' : 'Reported'} </u>
      </div>
    </div>
  );
};

export default MarkAsHelpfulOrReport;