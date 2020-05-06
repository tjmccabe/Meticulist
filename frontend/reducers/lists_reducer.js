import { RECEIVE_LISTS } from '../actions/list_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LISTS:
            return action.lists
        case RECEIVE_BOARD:
            return Object.assign({}, state, action.payload.lists)
        default:
            return state;
    }
};

export default listsReducer;