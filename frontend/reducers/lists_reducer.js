import {
    RECEIVE_NEW_LIST,
    RECEIVE_UPDATED_LIST,
    RECEIVE_CARD_ORDER,
    REMOVE_LIST,
} from '../actions/list_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NEW_LIST:
            return Object.assign({}, state, {[action.list.id]: action.list})
        case RECEIVE_UPDATED_LIST:
            return Object.assign({}, state, {[action.list.id]: action.list})
        case RECEIVE_CARD_ORDER:
            return Object.assign({}, state, {[action.listId]: {cardOrder: action.cardOrder}})
        case RECEIVE_BOARD:
            return Object.assign({}, state, action.payload.lists)
        default:
            return state;
    }
};

export default listsReducer;