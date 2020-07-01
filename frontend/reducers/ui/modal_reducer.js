import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const modalReducer = (state = [""], action) => {
    Object.freeze(state)

    switch (action.type) {
        case OPEN_MODAL:
            return [action.modal, action.identifier];
        case CLOSE_MODAL:
            return [""];
        case LOGOUT_CURRENT_USER:
            return [""];
        default:
            return state;
    }
}

export default modalReducer;