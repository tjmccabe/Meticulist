import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import * as bActs from './actions/board_actions';

const preloadedState = {};

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //testing below
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.bActs = bActs;
    //testing above
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});