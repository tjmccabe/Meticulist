import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import adminReducer from './admin_reducer';
import loadingReducer from './loading_reducer';
import searchResultsReducer from './search_results_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    admin: adminReducer,
    loading: loadingReducer,
    searchResults: searchResultsReducer
});

export default uiReducer;