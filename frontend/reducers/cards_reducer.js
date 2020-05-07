import {
    RECEIVE_NEW_CARD,
    RECEIVE_UPDATED_CARD,
    REMOVE_CARD
} from '../actions/card_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CARDS:
            return Object.assign({}, state, action.cards);
        case RECEIVE_BOARD:
            return Object.assign({}, state, action.payload.cards)
        default:
            return state;
    }
};

export default cardsReducer;