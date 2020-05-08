import {
    RECEIVE_NEW_LIST,
    RECEIVE_UPDATED_LIST,
    RECEIVE_CARD_ORDER,
    RECEIVE_TWO_LISTS,
    REMOVE_LIST,
} from '../../actions/list_actions';
import {
    RECEIVE_NEW_CARD,
    REMOVE_CARD
} from '../../actions/card_actions'; //DO THIS AFTER
import { RECEIVE_BOARD } from '../../actions/board_actions';
import {LOGOUT_CURRENT_USER} from '../../actions/session_actions'

const listsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NEW_LIST:
            return Object.assign({}, state, {[action.list.id]: action.list})
        case RECEIVE_UPDATED_LIST:
            return Object.assign({}, state, {[action.list.id]: action.list})
        case REMOVE_LIST:
            let newState = Object.assign({}, state);
            delete newState[action.list.id];
            return newState;
        case RECEIVE_CARD_ORDER:
            let newishState1 = Object.assign({}, state)
            newishState1[action.listId].cardOrder = action.cardOrder;
            return newishState1;
        case RECEIVE_TWO_LISTS:
            let newWithTwo = Object.assign({}, state)
            newWithTwo[action.listId1].cardOrder = action.cardOrder1;
            newWithTwo[action.listId2].cardOrder = action.cardOrder2;
            return newWithTwo;
        case RECEIVE_NEW_CARD:
            let newishState = Object.assign({}, state)
            let newCardOrder = state[action.card.listId].cardOrder.concat([action.card.id])
            newishState[action.card.listId].cardOrder = newCardOrder;
            return newishState
        case REMOVE_CARD:
            //this board needs to lose this list's id from its order
            let newState2 = Object.assign({}, state);
            let target = newState2[action.card.listId].cardOrder.indexOf(action.card.id);
            newState2[action.card.listId].cardOrder.splice(target, 1);
            return newState2;
        case RECEIVE_BOARD:
            return Object.assign({}, state, action.payload.lists)
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default listsReducer;