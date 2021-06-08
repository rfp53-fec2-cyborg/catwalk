/*
  Modal component to share between
  1. photos
  2. review form
  3. question / answer form
*/

import React, { useState } from 'react';
import { checkValidPhoto } from '../../helpers/imageFunctions.js';

// temporary styling for modal
var modalStyle = {
  position: 'fixed',
  background: 'white',
  height: 'auto',
  width: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  border: '2px solid',
};

// temporary styling for image
var imgStyle = {
  width: '35em',
  height: 'auto',
  position: 'relative',
  margin: '0 auto',
};

const ModalPhoto = ({props}) => {
  const [showModal, setShowModal] = useState(true);

  console.log(props);

  if (showModal) {
    return (
      <section style={modalStyle} >
        <img style={imgStyle} src={checkValidPhoto(props)}/>
        <div>
          <button onClick={() => setShowModal(current => !current)}> Close </button>
        </div>
      </section>
    );
  }
  // if (props.name === 'review') {
  //   return (
  //     <div> Write a review </div>
  //   );
  // }
  return null;
};

export default ModalPhoto;