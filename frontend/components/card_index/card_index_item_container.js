import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { } from '../../actions/card_actions';
import { openModal } from '../../actions/modal_actions';
import CardIndexItem from './card_index_item';

const mSTP = (state, ownProps) => {
  let {card} = ownProps
  return {
    card
  }
}

const mDTP = (dispatch) => ({
  openModal: (modal, cardId) => dispatch(openModal(modal, cardId))
})

export default withRouter(connect(mSTP, mDTP)(CardIndexItem))