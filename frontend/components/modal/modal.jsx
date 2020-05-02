import React from 'react';
//import board form

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'newBoard':
      component = null; //board form goes here
      break;
    case 'cardDetails':
      component = null;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal;