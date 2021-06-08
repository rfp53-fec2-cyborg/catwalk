/*
  Modal component to share between
  1. photos
  2. review form
  3. question / answer form
*/

import React, { useState } from 'react';
import { checkValidPhoto } from '../../helpers/imageFunctions.js';

const ModalPhoto = (props) => {
  const [showModal, setShowModal] = useState(true);

  if (showModal) {
    return (
      <section style={props.modalStyle} >
        <img style={props.imgStyle} src={checkValidPhoto(props.url)}/>
        <div>
          <button onClick={() => setShowModal(current => !current)}> Close </button>
        </div>
      </section>
    );
  }
  return null;
};

export default ModalPhoto;