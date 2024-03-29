/*

  HOW TO USE SHARED MODAL COMPONENT

  Modal.jsx is a skeleton for modal functionality. Pass the content as a property to render. Content property will be a jsx variable containing your modal-specific requirements and elements.

  1. In your specific component, create a component-specific modal (i.e. reviews/ModalPhoto.jsx).
  2. Make sure you also import and trigger that component-specific modal with appropriate event listener.
  3. Create a content variable that holds your desired content in jsx.

  e.g.
  const content = (
    <>
      <img style={imgStyle} src={checkValidPhoto(props.url)}/>
    </>
  );

  4. Import this Modal.jsx component and render it with the above content variable as a property. Closing the modal logic will be handled in this Modal.jsx component.

  e.g.
  return (
    <Modal content={content}/>
  );
*/

import React, { useState } from 'react';

const Modal = (props) => {
  const [showModal, setShowModal] = useState(true);

  if (showModal) {
    return (
      <section className="modal" >
        <div className="modal-dialog" >
          {props.content}
          <div className="modal-button" >
            <button onClick={() => setShowModal(current => !current)}> Close </button>
          </div>
        </div>
      </section>
    );
  }
  return null;
};

export default Modal;