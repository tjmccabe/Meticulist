import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateCard, deleteCard, receiveCardErrors } from '../../actions/card_actions';
import { closeModal } from '../../actions/modal_actions';
import CardDetails from './card_details';

const mSTP = (state, ownProps) => {
  let { cardId } = ownProps;
  let card = cardId ? state.entities.cards[cardId] : null;
  return {
    cardId,
    card,
    errors: state.errors.card,
    currentUserId: state.session.id,
  }
}

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  updateCard: (card) => dispatch(updateCard(card)),
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),
  clearErrors: () => dispatch(receiveCardErrors([]))
})

export default withRouter(connect(mSTP, mDTP)(CardDetails))