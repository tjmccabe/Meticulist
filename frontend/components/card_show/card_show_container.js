import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateCard, deleteCard, receiveCardErrors } from '../../actions/card_actions';
import { closeModal } from '../../actions/modal_actions';
import { openDropdown } from '../../actions/dropdown_actions';
import CardShow from './card_show';

const mSTP = (state, ownProps) => {
  let { cardId } = ownProps;
  let card = cardId ? state.entities.cards[cardId] : null;
  let listId = card ? card.listId : null
  let listTitle = state.entities.lists[listId] ? state.entities.lists[listId].title : null;
  return {
    dueDate: card.dueDate,
    cardId,
    card,
    listTitle,
    errors: state.errors.card,
    currentUserId: state.session.id,
  }
}

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  updateCard: (card) => dispatch(updateCard(card)),
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),
  openDropdown: (dropdown) => dispatch(openDropdown(dropdown)),
  clearErrors: () => dispatch(receiveCardErrors([]))
})

export default withRouter(connect(mSTP, mDTP)(CardShow))