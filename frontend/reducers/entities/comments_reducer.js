import {
  RECEIVE_NEW_COMMENT,
  RECEIVE_UPDATED_COMMENT,
  REMOVE_COMMENT
} from '../../actions/comment_actions';
import { RECEIVE_BOARD } from "../../actions/board_actions"
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions'

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NEW_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment })
    case RECEIVE_UPDATED_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment })
    case REMOVE_COMMENT:
      let newState = Object.assign({}, state);
      delete newState[action.comment.id];
      return newState;
    case RECEIVE_BOARD:
      return Object.assign({}, state, action.payload.comments)
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default commentsReducer;