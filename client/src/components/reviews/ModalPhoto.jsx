import React from 'react';
import Modal from '../shared/Modal.jsx';
import { checkValidPhoto } from '../../helpers/imageFunctions.js';
import LazyImage from '../shared/LazyImage.jsx';

const ModalPhoto = (props) => {
  const content = (
    <>
      <LazyImage className="modal-image" src={checkValidPhoto(props.url)} alt="Picture in modal form from a product review"/>
    </>
  );

  return (
    <Modal content={content}/>
  );
};

export default ModalPhoto;