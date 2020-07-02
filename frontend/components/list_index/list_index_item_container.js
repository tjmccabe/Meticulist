import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { updateList, deleteList } from '../../actions/list_actions';
import { openDropdown, closeDropdowns } from '../../actions/dropdown_actions'
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
  openModal: (modal, identifier) => dispatch(openModal(modal, identifier)),
  deleteList: (listId) => dispatch(deleteList(listId)),
  openDropdown: (dropdown) => dispatch(openDropdown(dropdown)),
  closeDropdowns: () => dispatch(closeDropdowns())
})

export default withRouter(connect(mSTP, mDTP)(ListIndexItem))