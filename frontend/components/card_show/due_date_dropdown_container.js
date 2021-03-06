import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DueDateDropdown from './due_date_dropdown';
import { closeDropdowns } from "../../actions/dropdown_actions";
import { updateCard } from "../../actions/card_actions";

const mSTP = (state, ownProps) => {
  let {dropdownId} = ownProps;
  let cardId = ownProps.card.id;
  let card = state.entities.cards[cardId]
  return {
    dropdownId,
    card,
    currentDropdown: state.ui.dropdown,
    errors: state.errors.card
  }
}

const mDTP = (dispatch) => ({
  closeDropdowns: () => dispatch(closeDropdowns()),
  updateCard: (card) => dispatch(updateCard(card))
})

export default withRouter(connect(mSTP, mDTP)(DueDateDropdown))