import {
    RECEIVE_NEW_CARD,
    RECEIVE_UPDATED_CARD,
    REMOVE_CARD
} from '../../actions/card_actions';
import { RECEIVE_BOARD } from '../../actions/board_actions';
import {LOGOUT_CURRENT_USER} from '../../actions/session_actions'

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NEW_CARD:
            return Object.assign({}, state, {[action.card.id]: action.card});
        case RECEIVE_UPDATED_CARD:
            return Object.assign({}, state, {[action.card.id]: action.card});
        case REMOVE_CARD:
            let newState = Object.assign({}, state);
            delete newState[action.card.id];
            return newState
        case RECEIVE_BOARD:
            return Object.assign({}, state, action.payload.cards);
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default cardsReducer;