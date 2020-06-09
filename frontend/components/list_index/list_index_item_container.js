import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateList, deleteList } from '../../actions/list_actions';
// maybe also reorderCards
// all card actions in a deeper component
import { getCardOrders, getLists, getCards } from '../../reducers/selectors';
import ListIndexItem from './list_index_item';

const mSTP = (state, ownProps) => {
  let listId = ownProps.list.id
  return {
    title: state.entities.lists[listId].title,
    listId
  }
}

const mDTP = (dispatch) => ({
  updateList: (list) => dispatch(updateList(list))
})

export default withRouter(connect(mSTP, mDTP)(ListIndexItem))