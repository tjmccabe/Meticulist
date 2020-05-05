import * as ListAPI from '../util/list_api_util';

export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';

const receiveList = (list) => ({
    type: RECEIVE_LIST,
    list
});

const removeList = (listId) => ({
    type: REMOVE_LIST,
    listId
});

const receiveListErrors = (errors) => ({
    type: RECEIVE_LIST_ERRORS,
    errors
})

export const createList = (list) => (dispatch) => {
    ListAPI.createList(list)
        .then(list => dispatch(receiveList(list)))
        .fail(errors => console.log(errors.responseJSON))
        // .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
}

export const deleteList = (listId) => (dispatch) => {
    ListAPI.deleteList(listId)
        .then(() => dispatch(removeList(listId)))
        .fail(errors => console.log(errors.responseJSON))
        // .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
}