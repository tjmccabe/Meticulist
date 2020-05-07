import {
    RECEIVE_SEARCH_IMAGES,
    RECEIVE_RANDOM_IMAGES,
    RECEIVE_IMAGE_ERRORS
} from '../../actions/unslpash_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const listErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_IMAGE_ERRORS:
            return action.errors;
        case RECEIVE_SEARCH_IMAGES:
            return [];
        case RECEIVE_RANDOM_IMAGES:
            return [];
        case LOGOUT_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default listErrorsReducer;