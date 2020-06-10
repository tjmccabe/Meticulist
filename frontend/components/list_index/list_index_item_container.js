import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateList, deleteList } from '../../actions/list_actions';
import { openDropdown, closeDropdowns } from '../../actions/dropdown_actions'
// maybe also reorderCards
// all card actions in a deeper component
// import { getCardOrders, getLists, getCards } from '../../reducers/selectors';
import ListIndexItem from './list_index_item';

const mSTP = (state, ownProps) => {
  let listId = ownProps.list ? ownProps.list.id : null;
  let title = listId ? state.entities.lists[listId].title : null;
  return {
    title,
    listId,
    currentDropdown: state.ui.dropdown
  }
}

const mDTP = (dispatch) => ({
  updateList: (list) => dispatch(updateList(list)),
  deleteList: (listId) => dispatch(deleteList(listId)),
  openDropdown: (dropdown) => dispatch(openDropdown(dropdown)),
  closeDropdowns: () => dispatch(closeDropdowns())
})

export default withRouter(connect(mSTP, mDTP)(ListIndexItem))