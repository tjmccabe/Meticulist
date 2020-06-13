import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchUser } from '../../actions/user_actions';
import CommentBlock from './comment_block';

const mSTP = (state, ownProps) => {
  let { card } = ownProps;
  let currentUserId = state.session.id;
  return {
    card,
    cardId: card.id,
    errors: state.errors.comments ? state.errors.comments : [], // change after errors exist
    currentUserId,
    currentUser: state.entities.users[currentUserId]
  }
}

const mDTP = (dispatch) => ({
  // clearErrors: () => dispatch(receiveCommentErrors([]))
})

export default withRouter(connect(mSTP, mDTP)(CommentBlock))