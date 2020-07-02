import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createList, reorderCards, reorderTwoLists } from '../../actions/list_actions';
import { updateCard } from "../../actions/card_actions"
import { fetchBoard, reorderLists } from '../../actions/board_actions';
import { getCardOrders, getLists } from '../../reducers/selectors';
import ListIndex from './list_index';

const mSTP = (state, ownProps) => {
    let boardId = ownProps.match.params.boardId
    let listOrder = state.entities.boards[boardId] ? state.entities.boards[boardId].listOrder : [];
    let cardOrders = listOrder ? getCardOrders(state, listOrder) : null;
    let lists = listOrder ? getLists(state, listOrder) : null;

    return {
        listOrder,
        cardOrders,
        lists,
        boardId,
        trayActive: state.ui.trayActive
    }
}

const mDTP = (dispatch) => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    reorderLists: (listOrder, boardId) => dispatch(reorderLists(listOrder, boardId)),
    createList: list => dispatch(createList(list)),
    reorderCards: (cardOrder, listId) => dispatch(reorderCards(cardOrder, listId)),
    reorderTwoLists: (cO1, lI1, cO2, lI2) => dispatch(reorderTwoLists(cO1, lI1, cO2, lI2)),
    updateCard: card => dispatch(updateCard(card))
})

export default withRouter(connect(mSTP, mDTP)(ListIndex))