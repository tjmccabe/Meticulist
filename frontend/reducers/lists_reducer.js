import {
    RECEIVE_LIST,
    REMOVE_LIST
} from '../actions/list_actions';
import {
    RECEIVE_CARD,
    REMOVE_CARD
} from '../actions/card_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LIST:
            return Object.assign({}, state, {[action.list.id]: action.list});
        case REMOVE_LIST:
            let newState = Object.assign({}, state);
            delete newState[action.listId];
            return newState;
        case RECEIVE_CARD:
            let origCardIds1 = state[action.card.listId][cardIds];
            if (origCardIds1.includes(action.card.id)) return state;

            let copy1 = [...origCardIds1].push(action.card.id);
            return Object.assign(
                {},
                state,
                {[action.card.listId]: {cardIds: copy1}}
            );
        case REMOVE_CARD:
            let origCardIds2 = state[action.card.listId][cardIds];
            if (!origCardIds2.includes(action.card.id)) return state;

            let copy2 = [...origCardIds2].splice(origCardIds2.indexOf(action.card.id), 1)
            return Object.assign(
                {},
                state,
                {[action.card.listId]: {cardIds: copy2}}
            );
        default:
            return state;
    }
};

export default listsReducer;