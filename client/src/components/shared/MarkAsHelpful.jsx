import React, { useState } from 'react';

const MarkAsHelpful = ({helpfulness}) => {
  const [helpTally, setHelpTally] = useState(helpfulness);

  return (
    <div> Was this review helpful? <u onClick={() => setHelpTally(helpTally + 1)} >Yes</u> <u value="No" onClick={() => setHelpTally(helpTally - 1)} >No</u> ({helpTally}) </div>
  );
};

export default MarkAsHelpful;