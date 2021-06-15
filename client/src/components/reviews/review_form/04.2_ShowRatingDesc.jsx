import React, { useState } from 'react';

const ShowRatingDesc = (props) => {

  const [showDesc, setShowDesc] = useState(false);

  if (!showDesc) {
    return (
      <div className="caution-text" onClick={() => setShowDesc(current => !current)}> Show grading description </div>
    );
  } else {
    return (
      <article onClick={() => setShowDesc(current => !current)}>
        Hide grading description
        <ul className="characteristic-desc-list">
          {props.desc[props.characteristic].map((desc, index) =>
            <p key={index + 1} > {`${index + 1} ${desc}`} </p>
          )}
        </ul>
      </article>
    );
  }
};

export default ShowRatingDesc;