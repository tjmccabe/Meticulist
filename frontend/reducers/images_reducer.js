import {RECEIVE_IMAGES, CLEAR_IMAGES} from '../actions/unslpash_actions';

const imagesReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_IMAGES:
            if (action.response.results) {
                return action.response.results.map((res) => {
                    return {
                        full: res.urls.full,
                        thumb: res.urls.thumb,
                        alt: res.alt_description
                    }
                })
            } else {
                return action.response.map((res) => {
                    return {
                        full: res.urls.full,
                        thumb: res.urls.thumb,
                        alt: res.alt_description
                    }
                })
            }
        case CLEAR_IMAGES:
            return []
        default:
            return state;
    }
}

export default imagesReducer;