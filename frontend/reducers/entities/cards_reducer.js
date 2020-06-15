import {
    RECEIVE_NEW_CARD,
    RECEIVE_UPDATED_CARD,
    REMOVE_CARD
} from '../../actions/card_actions';
import { RECEIVE_BOARD } from '../../actions/board_actions';
import { RECEIVE_NEW_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions';
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
        case RECEIVE_NEW_COMMENT:
            let newCommentIds = [...state[action.comment.cardId].commentIds]
            newCommentIds.push(action.comment.id)
            let newCard = Object.assign({}, state[action.comment.cardId], {commentIds: newCommentIds})
            return Object.assign({}, state, { [action.comment.cardId]: newCard });
        case REMOVE_COMMENT:
            let newCommentIds2 = [...state[action.comment.cardId].commentIds]
            newCommentIds2 = newCommentIds2.filter(id => id !== action.comment.id)
            let newCard2 = Object.assign({}, state[action.comment.cardId], { commentIds: newCommentIds2 })
            return Object.assign({}, state, { [action.comment.cardId]: newCard2 });
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default cardsReducer;