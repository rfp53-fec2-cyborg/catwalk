/*
  Modal component to share between
  1. photos
  2. review form
  3. question / answer form
*/

import React, { useState } from 'react';
import ModalPhoto from './ModalPhoto.jsx';

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

const Modal = (props) => {
  if (props.name === 'photo') {
    return <ModalPhoto url={props.url} modalStyle={modalStyle} imgStyle={imgStyle}/>;
  }
  // if (props.name === 'review') {
  // }
  // if (props.name === 'question') {
  // }
  // if (props.name === 'answer') {
  // }
  return null;
};

export default Modal;