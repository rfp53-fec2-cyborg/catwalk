import React, { useState, useEffect } from 'react';

const BodyWordCount = ({formDetailsBodyLength}) => {

  const [wordCount, setWordCount] = useState(formDetailsBodyLength);

  useEffect(() => {
    setWordCount(formDetailsBodyLength);
  }, [formDetailsBodyLength]);

  return (
    <p id="body-word-count">
      {wordCount < 50
        ? `Minimum required characters left: ${50 - wordCount}.`
        : 'Minimum reached.'
      }
    </p>
  );
};

export default BodyWordCount;