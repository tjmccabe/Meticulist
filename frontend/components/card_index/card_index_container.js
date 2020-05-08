import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reorderCards } from '../../actions/list_actions';
import {getCards} from '../../reducers/selectors';
import CardIndex from './card_index';

const mSTP = (state, ownProps) => {
  //get listid
  let cardOrder = state.entities.lists[ownProps.listId].cardOrder;
  let cards = getCards(state, cardOrder);
  return {
    listId: ownProps.listId,
    cardOrder,
    cards
  }
}

const mDTP = (dispatch) => ({
})

export default withRouter(connect(mSTP, mDTP)(CardIndex))