import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import adminReducer from './admin_reducer';
import loadingReducer from './loading_reducer';
import imagesReducer from './images_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    admin: adminReducer,
    loading: loadingReducer,
    images: imagesReducer
});

export default uiReducer;