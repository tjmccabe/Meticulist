import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reorderCards } from '../../actions/list_actions';
import {getCards} from '../../reducers/selectors';
import CardIndex from './card_index';

const mSTP = (state, ownProps) => {
  let cardOrder = ownProps.cardOrder;
  let cards = getCards(state, cardOrder);
  return {
    cardOrder,
    cards
  }
}

const mDTP = (dispatch) => ({
})

export default withRouter(connect(mSTP, mDTP)(CardIndex))