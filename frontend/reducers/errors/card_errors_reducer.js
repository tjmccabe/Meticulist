import {
    RECEIVE_NEW_CARD,
    RECEIVE_UPDATED_CARD,
    REMOVE_CARD,
    RECEIVE_CARD_ERRORS
} from '../../actions/card_actions'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const listErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CARD_ERRORS:
            return action.errors;
        case RECEIVE_NEW_CARD:
            return [];
        case RECEIVE_UPDATED_CARD:
            return [];
        case REMOVE_CARD:
            return [];
        case LOGOUT_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default listErrorsReducer;