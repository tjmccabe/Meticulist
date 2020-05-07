import {
    RECEIVE_BOARDS,
    RECEIVE_BOARD,
    REMOVE_BOARD,
    RECEIVE_LIST_ORDER
} from '../actions/board_actions';
import {
    RECEIVE_NEW_LIST,
    REMOVE_LIST
} from '../actions/list_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards
        case RECEIVE_BOARD:
            return Object.assign({}, state, {[action.payload.board.id]: action.payload.board})
        case RECEIVE_LIST_ORDER:
            return Object.assign({}, state, { [action.boardId]: { listOrder: action.listOrder } })
        case RECEIVE_NEW_LIST:
            let newListOrder = state[action.list.boardId][listOrder].concat([list.id])
            return Object.assign({}, state, {[action.list.boardId]: {listOrder: newListOrder}})
        case REMOVE_BOARD:
            let newState = Object.assign({}, state);
            delete newState[action.boardId];
            return newState;
        case REMOVE_LIST:
            //this board needs to lose this list's id from its order
            let newState2 = Object.assign({}, state);
            let target = newState2[action.list.boardId][listOrder].indexOf(action.list.id);
            newState2[action.list.boardId][listOrder].splice(target, 1);
            return newState2;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default boardsReducer;