import React from 'react';
import {withRouter} from 'react-router-dom';
import NewBoardFormContainer from '../board_form/new_board_form_container';
import UpdateBoardFormContainer from '../board_form/update_board_form_container';
import CardShowContainer from '../card_show/card_show_container';
import DeleteContainer from './delete_container';
import SiteInstructions from './instructions';

const Modal = ({modal, identifier, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  let childClass = "";

  switch (modal) {
    case 'newBoard':
      component = <NewBoardFormContainer/>;
      childClass = 'high-modal'
      break;
    case 'updateBoard':
      component = <UpdateBoardFormContainer/>;
      childClass = 'high-modal'
      break;
    case 'cardShow':
      component = <CardShowContainer cardId={identifier}/>;
      childClass = 'scrollable-modal'
      break;
    case 'instructions':
      component = <SiteInstructions/>;
      break;
    case 'delete':
      component = <DeleteContainer type={identifier[0]} id={identifier[1]}/>;
      break;
    default:
      return null;
  }

  return (
    <div className={`modal-background`} onMouseDown={closeModal}>
      <div className={`modal-child ${childClass}`} onMouseDown={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default withRouter(Modal);