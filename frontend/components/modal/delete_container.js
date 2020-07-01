import {withRouter} from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions';
import {deleteBoard} from '../../actions/board_actions'
import {deleteList} from '../../actions/list_actions'
import {deleteCard} from '../../actions/card_actions'
import {deleteComment} from '../../actions/comment_actions'
import { connect } from 'react-redux';
import Delete from './delete';

const mapStateToProps = (state, ownProps) => {
  let {identifier} = ownProps
  return {
    type: identifier[0],
    id: identifier[1]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    deleteList: (listId) => dispatch(deleteList(listId)),
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Delete));