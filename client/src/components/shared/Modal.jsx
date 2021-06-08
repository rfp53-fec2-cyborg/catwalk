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

var imgStyle = {
  width: '35em',
  height: 'auto',
  position: 'relative',
  margin: '0 auto',
};

const Modal = (props) => {
  console.log(props);

  const [showModal, setShowModal] = useState(true);

  if (props.name === 'photo' && showModal) {
    return (
      <section style={modalStyle} >
        <img style={imgStyle} src={checkValidPhoto(props.url)}/>
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

export default Modal;