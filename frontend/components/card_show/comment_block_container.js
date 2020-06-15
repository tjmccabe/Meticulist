import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createComment,
  updateComment,
  deleteComment,
  receiveCommentErrors } from '../../actions/comment_actions';
import {getComments} from "../../reducers/selectors"
import CommentBlock from './comment_block';

const mSTP = (state, ownProps) => {
  let { card } = ownProps;
  let comments = getComments(state, card)
  let currentUserId = state.session.id;
  return {
    card,
    cardId: card.id,
    comments,
    errors: state.errors.comments ? state.errors.comments : [], // change after errors exist
    currentUserId,
    currentUser: state.entities.users[currentUserId]
  }
}

const mDTP = (dispatch) => ({
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  clearErrors: () => dispatch(receiveCommentErrors([]))
})

export default withRouter(connect(mSTP, mDTP)(CommentBlock))