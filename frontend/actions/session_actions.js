import * as API from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const login = (formUser) => dispatch => {
    API.login(formUser)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const logout = () => dispatch => {
    API.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const signup = (formUser) => dispatch => {
    API.signup(formUser)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};
