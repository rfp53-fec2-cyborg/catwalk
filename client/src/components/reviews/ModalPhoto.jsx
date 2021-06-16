import React from 'react';
import Modal from '../shared/Modal.jsx';
import { checkValidPhoto } from '../../helpers/imageFunctions.js';


const ModalPhoto = (props) => {
  const content = (
    <>
      <img className="modal-image" src={checkValidPhoto(props.url)}/>
    </>
  );

  return (
    <Modal content={content}/>
  );
};

export default ModalPhoto;