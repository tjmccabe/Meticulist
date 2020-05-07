import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createList, deleteList} from '../../actions/list_actions';
// maybe also updateList and/or reorderCards
// all card actions in a deeper component
import {fetchBoard, reorderLists} from '../../actions/board_actions';
import {getCardOrders} from '../../reducers/selectors';
import ListIndex from './list_index';

const mSTP = (state, ownProps) => {
    let boardId = ownProps.match.params.boardId
    let listOrder = state.entities.boards[boardId] ? state.entities.boards[boardId].listOrder : [];
    let cardOrders = listOrder ? getCardOrders(state, listOrder) : null
    return {
        listOrder,
        cardOrders,
        boardId
    }
}

const mDTP = (dispatch) => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    reorderLists: (listOrder, boardId) => dispatch(reorderLists(listOrder, boardId)),
    createList: list => dispatch(createList(list)),
    deleteList: listId => dispatch(deleteList(listId))
})

export default withRouter(connect(mSTP, mDTP)(ListIndex))