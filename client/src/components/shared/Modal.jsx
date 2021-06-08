/*
  Modal component to share between
  1. photos
  2. review form
  3. question / answer form
*/

import React, { useState } from 'react';

const Modal = (props) => {
  console.log(props);
  if (props.name === 'photo') {
    return (
      <div> Show photos </div>
    );
  }
  // if (props.name === 'review') {
  //   return (
  //     <div> Write a review </div>
  //   );
  // }
};

export default Modal;