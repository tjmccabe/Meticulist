import { RECEIVE_LISTS } from '../actions/list_actions';
import {
    RECEIVE_CARD,
    REMOVE_CARD
} from '../actions/card_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LISTS:
            return action.lists
        default:
            return state;
    }
};

export default listsReducer;