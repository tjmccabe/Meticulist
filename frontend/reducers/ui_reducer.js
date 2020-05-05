import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import adminReducer from './admin_reducer';
import loadingReducer from './loading_reducer';
import imagesReducer from './images_reducer';
import trayActiveReducer from './tray_active_reducer';
import dropdownsReducer from './dropdowns_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    trayActive: trayActiveReducer,
    admin: adminReducer,
    loading: loadingReducer,
    images: imagesReducer,
    dropdown: dropdownsReducer
});

export default uiReducer;