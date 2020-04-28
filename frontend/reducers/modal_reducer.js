// import {STUFF} from '../actions/stuff_actions.js'
let STUFF = 'STUFF';

const modalReducer = (state = null, action) => {
    Object.freeze(state)

    switch (action.type) {
        case STUFF:
            return state;
        default:
            return state;
    }
}

export default modalReducer;