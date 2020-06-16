import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DueDateBlock from './due_date_block';
import { openDropdown } from "../../actions/dropdown_actions"

const mSTP = (state, ownProps) => {
  let { card } = ownProps;
  let currentUserId = state.session.id;
  return {
    card,
    cardId: card.id,
    dueDate: card.dueDate,
    errors: state.errors.dueDate ? state.errors.dueDate : [] // change after errors exist
  }
}

const mDTP = (dispatch) => ({
  openDropdown: (dropdown) => dispatch(openDropdown(dropdown))
})

export default withRouter(connect(mSTP, mDTP)(DueDateBlock))