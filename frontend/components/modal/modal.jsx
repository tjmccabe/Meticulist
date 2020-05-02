import React from 'react';
import BoardFormContainer from '../board_form/board_form_container';
//import board form

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  let addClass = null;

  switch (modal) {
    case 'newBoard':
      component = <BoardFormContainer/>;
      addClass = ' high-modal'
      break;
    case 'cardDetails':
      component = null;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className={`modal-child${addClass}`} onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal;