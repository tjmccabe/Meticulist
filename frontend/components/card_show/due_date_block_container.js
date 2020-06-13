import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DueDateBlock from './due_date_block';

const mSTP = (state, ownProps) => {
  let { card } = ownProps;
  let currentUserId = state.session.id;
  return {
    card,
    cardId: card.id,
    errors: state.errors.dueDate ? state.errors.dueDate : [], // change after errors exist
    currentUserId,
    currentUser: state.entities.users[currentUserId]
  }
}

const mDTP = (dispatch) => ({
  // clearErrors: () => dispatch(receiveDueDateErrors([]))
})

export default withRouter(connect(mSTP, mDTP)(DueDateBlock))