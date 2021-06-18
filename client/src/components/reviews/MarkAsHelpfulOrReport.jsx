import React, { useState } from 'react';

const MarkAsHelpfulOrReport = ({ reportClick, ...props }) => {
  const [reportedStatus, setReportedStatus] = useState(false);

  return (
    <div> Was this review helpful?
      <u name="helpful" onClick={(e) => { props.markReviewAsHelpful(props.reviewID); if (reportClick) { reportClick(e); } }} > Yes </u> ({props.helpfulness})
      <div>
        <u onClick={(e) => {
          props.reportReview(props.reviewID);
          setReportedStatus(current => !current);
          if (reportClick) { reportClick(e); }
        }} > {!reportedStatus ? 'Report' : 'Reported'} </u>
      </div>
    </div>
  );
};

export default MarkAsHelpfulOrReport;