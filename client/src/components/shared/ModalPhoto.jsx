/*
  Modal component to share between
  1. photos
  2. review form
  3. question / answer form
*/

import React, { useState } from 'react';
import { checkValidPhoto } from '../../helpers/imageFunctions.js';

const ModalPhoto = (props) => {
  return (
    <>
      <img style={props.imgStyle} src={checkValidPhoto(props.url)}/>
    </>
  );
};

export default ModalPhoto;