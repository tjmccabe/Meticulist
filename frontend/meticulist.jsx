import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import * as API from './util/session_api_util';

const preloadedState = {};

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore(preloadedState);

    //testing below
    window.getState = store.getState
    window.dispatch = store.dispatch
    //testing above

    ReactDOM.render(<h1 store={store}>Welcome to Meticulist</h1>, root);
});