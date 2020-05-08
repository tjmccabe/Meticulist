import {
    RECEIVE_NEW_LIST,
    RECEIVE_UPDATED_LIST,
    REMOVE_LIST,
    RECEIVE_CARD_ORDER,
    RECEIVE_TWO_LISTS,
    RECEIVE_LIST_ERRORS
} from '../../actions/list_actions'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const listErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_LIST_ERRORS:
            return action.errors;
        case RECEIVE_NEW_LIST:
            return [];
        case RECEIVE_UPDATED_LIST:
            return [];
        case REMOVE_LIST:
            return [];
        case RECEIVE_CARD_ORDER:
            return [];
        case RECEIVE_TWO_LISTS:
            return [];
        case LOGOUT_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default listErrorsReducer;