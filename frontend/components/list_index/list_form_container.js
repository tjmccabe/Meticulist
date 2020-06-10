import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createList } from '../../actions/list_actions';
import ListForm from './list_form';

const mSTP = (state, ownProps) => {
  let boardId = ownProps.boardId
  let listOrder = state.entities.boards[boardId].listOrder
  return {
    boardId,
    listOrder
  }
}

const mDTP = (dispatch) => ({
  createList: (list) => dispatch(createList(list))
})

export default withRouter(connect(mSTP, mDTP)(ListForm))