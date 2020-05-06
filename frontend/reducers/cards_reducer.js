import {
    RECEIVE_CARD,
    REMOVE_CARD
} from '../actions/card_actions';

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CARD:
            return Object.assign({}, state, { [action.card.id]: action.card });
        case REMOVE_CARD:
            let newState = Object.assign({}, state);
            delete newState[action.cardId];
            return newState;
        default:
            return state;
    }
};

export default cardsReducer;