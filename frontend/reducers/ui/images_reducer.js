import {
    RECEIVE_SEARCH_IMAGES,
    RECEIVE_RANDOM_IMAGES,
} from '../../actions/unslpash_actions';
import {LOGOUT_CURRENT_USER} from '../../actions/session_actions';

const imagesReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_IMAGES:
            return action.response.results.map((res) => ({
                full: res.urls.full,
                small: res.urls.small,
                alt: res.alt_description
            }))
        case RECEIVE_RANDOM_IMAGES:
            return action.response.map((res) => ({
                full: res.urls.full,
                small: res.urls.small,
                alt: res.alt_description
            }))
        case LOGOUT_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default imagesReducer;