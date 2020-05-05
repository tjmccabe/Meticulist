// import {STUFF} from '../actions/stuff_actions.js'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
let STUFF = 'STUFF';

const loadingReducer = (state = false, action) => {
    Object.freeze(state)

    switch (action.type) {
        case STUFF:
            return state;
        case LOGOUT_CURRENT_USER:
            return false;
        default:
            return state;
    }
}

export default loadingReducer;