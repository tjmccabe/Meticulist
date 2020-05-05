import {OPEN_TRAY, CLOSE_TRAY} from '../actions/tray_actions';

const trayActiveReducer = (state = false, action) => {
    switch (action.type) {
        case OPEN_TRAY:
            return true;
        case CLOSE_TRAY:
            return false;
        default:
            return state;
    }
}

export default trayActiveReducer;