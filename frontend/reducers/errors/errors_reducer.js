import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import boardErrorsReducer from './board_errors_reducer';
import listErrorsReducer from './list_errors_reducer';
import cardErrorsReducer from './card_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';
import imageErrorsReducer from './image_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    board: boardErrorsReducer,
    list: listErrorsReducer,
    card: cardErrorsReducer,
    comment: commentErrorsReducer,
    image: imageErrorsReducer
});

export default errorsReducer;