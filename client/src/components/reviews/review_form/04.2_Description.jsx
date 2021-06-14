import React, { useState } from 'react';

const characteristicDescription = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
};

const Description = ({characteristic}) => {

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
          {characteristicDescription[characteristic].map((desc, index) =>
            <p key={index + 1} id={index + 1} > {`${index + 1} ${desc}`} </p>
          )}
        </ul>
      </article>
    );
  }
};

export default Description;