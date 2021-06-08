/*
  Modal component to share between
  1. photos
  2. review form
  3. question / answer form
*/

import React, { useState } from 'react';
import ModalPhoto from './ModalPhoto.jsx';

const Modal = (props) => {
  if (props.name === 'photo') {
    return <ModalPhoto props={props.url}/>;
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