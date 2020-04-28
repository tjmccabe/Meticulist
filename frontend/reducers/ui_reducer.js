import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import adminReducer from './admin_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    admin: adminReducer
});

export default uiReducer;