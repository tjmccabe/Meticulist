import {
    RECEIVE_BOARD_ERRORS,
    RECEIVE_BOARDS,
    RECEIVE_BOARD,
    REMOVE_BOARD,
    RECEIVE_LIST_ORDER
} from '../../actions/board_actions'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const boardErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
        case RECEIVE_BOARDS:
            return [];
        case RECEIVE_BOARD:
            return [];
        case REMOVE_BOARD:
            return [];
        case RECEIVE_LIST_ORDER:
            return [];
        case LOGOUT_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default boardErrorsReducer;