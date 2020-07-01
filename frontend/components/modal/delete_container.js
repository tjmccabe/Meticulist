import { withRouter } from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions';
import { deleteBoard } from '../../actions/board_actions'
import { deleteList } from '../../actions/list_actions'
import { deleteCard } from '../../actions/card_actions'
import { getEntity } from '../../reducers/selectors'
import { connect } from 'react-redux';
import Delete from './delete';

const mapStateToProps = (state, ownProps) => {
  let {type, id} = ownProps
  let entity = getEntity(state, type, id)
  return {
    type,
    id,
    entity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    deleteList: (listId) => dispatch(deleteList(listId)),
    deleteCard: (cardId) => dispatch(deleteCard(cardId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Delete));