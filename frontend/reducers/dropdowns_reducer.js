import {OPEN_DROPDOWN, CLOSE_DROPDOWNS} from '../actions/dropdown_actions.js';
import {RECEIVE_BOARD} from '../actions/board_actions';

const dropdownsReducer = (state = '', action) => {
    switch (action.type) {
        case OPEN_DROPDOWN:
            return action.dropdown;
        case CLOSE_DROPDOWNS:
            return '';
        case RECEIVE_BOARD:
            return '';
        default:
            return state;
    }
}

export default dropdownsReducer;