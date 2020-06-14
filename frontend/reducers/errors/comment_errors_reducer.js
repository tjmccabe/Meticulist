import {
  RECEIVE_NEW_COMMENT,
  RECEIVE_UPDATED_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_COMMENT_ERRORS
} from '../../actions/comment_actions'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const commentErrorsReducer = (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_NEW_COMMENT:
      return [];
    case RECEIVE_UPDATED_COMMENT:
      return [];
    case REMOVE_COMMENT:
      return [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default commentErrorsReducer;