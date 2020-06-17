import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DueDateBlock from './due_date_block';
import { openDropdown } from "../../actions/dropdown_actions"

const mSTP = (state, ownProps) => {
  let cardId = ownProps.card.id;
  let card = state.entities.cards[cardId]
  // let dueDateString = JSON.stringify(card.dueDate)
  return {
    card,
    dueDate: card.dueDate,
    errors: state.errors.card
  }
}

const mDTP = (dispatch) => ({
  openDropdown: (dropdown) => dispatch(openDropdown(dropdown))
})

export default withRouter(connect(mSTP, mDTP)(DueDateBlock))