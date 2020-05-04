import React from 'react';
import {withRouter} from 'react-router-dom';
import NewBoardFormContainer from '../board_form/new_board_form_container';
import UpdateBoardFormContainer from '../board_form/update_board_form_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  let addClass = null;

  switch (modal) {
    case 'newBoard':
      component = <NewBoardFormContainer/>;
      addClass = 'high-modal'
      break;
    case 'updateBoard':
      component = <UpdateBoardFormContainer/>;
      addClass = 'high-modal'
      break;
    case 'cardDetails':
      component = null;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className={`modal-child ${addClass}`} onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default withRouter(Modal);