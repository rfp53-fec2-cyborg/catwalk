import React, { useState } from 'react';
import Modal from '../shared/Modal.jsx';
import { checkValidPhoto } from '../../helpers/imageFunctions.js';

// temporary styling for image
var imgStyle = {
  width: '35em',
  height: 'auto',
  position: 'relative',
  margin: '0 auto',
};

const ModalPhoto = (props) => {
  const content = (
    <>
      <img style={imgStyle} src={checkValidPhoto(props.url)}/>
    </>
  );

  return (
    <Modal content={content}/>
  );
};

export default ModalPhoto;