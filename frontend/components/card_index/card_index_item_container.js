import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { } from '../../actions/card_actions';
// maybe also reorderCards
// all card actions in a deeper component
import CardIndexItem from './card_index_item';

const mSTP = (state, ownProps) => {
  let {card} = ownProps
  return {
    card
  }
}

const mDTP = (dispatch) => ({
})

export default withRouter(connect(mSTP, mDTP)(CardIndexItem))