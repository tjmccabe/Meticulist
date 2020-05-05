import {OPEN_TRAY, CLOSE_TRAY} from '../actions/tray_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const trayActiveReducer = (state = false, action) => {
    switch (action.type) {
        case OPEN_TRAY:
            return true;
        case CLOSE_TRAY:
            return false;
        case LOGOUT_CURRENT_USER:
            return false;
        default:
            return state;
    }
}

export default trayActiveReducer;