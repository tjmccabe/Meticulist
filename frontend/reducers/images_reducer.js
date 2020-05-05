import {RECEIVE_IMAGES, CLEAR_IMAGES} from '../actions/unslpash_actions';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

const imagesReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_IMAGES:
            if (action.response.results) {
                return action.response.results.map((res) => {
                    return {
                        full: res.urls.full,
                        small: res.urls.small,
                        alt: res.alt_description
                    }
                })
            } else {
                return action.response.map((res) => {
                    return {
                        full: res.urls.full,
                        small: res.urls.small,
                        alt: res.alt_description
                    }
                })
            }
        case CLEAR_IMAGES:
            return [];
        case LOGOUT_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default imagesReducer;