import * as ListAPI from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';

const receiveLists = (lists) => ({
    type: RECEIVE_LISTS,
    lists
});

const removeList = () => ({
    type: REMOVE_LIST
})

const receiveListErrors = (errors) => ({
    type: RECEIVE_LIST_ERRORS,
    errors
});

export const createList = (list) => (dispatch) => {
    ListAPI.createList(list)
        .then(lists => dispatch(receiveLists(lists)))
        .fail(errors => console.log(errors.responseJSON))
        // .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
};

export const updateList = (list) => (dispatch) => {
    ListAPI.updateList(list)
        .then(lists => dispatch(receiveLists(lists)))
        .fail(errors => console.log(errors.responseJSON))
        // .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
};

export const deleteList = (listId) => (dispatch) => {
    ListAPI.deleteList(listId)
        .then(lists => dispatch(receiveLists(lists)))
        .fail(errors => console.log(errors.responseJSON))
        // .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
};