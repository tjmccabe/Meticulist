// import {STUFF} from '../actions/stuff_actions.js'
let STUFF = 'STUFF';

const loadingReducer = (state = false, action) => {
    Object.freeze(state)

    switch (action.type) {
        case STUFF:
            return state;
        default:
            return state;
    }
}

export default loadingReducer;