import * as ListAPI from '../util/list_api_util';

export const RECEIVE_NEW_LIST = 'RECEIVE_NEW_LIST';
export const RECEIVE_UPDATED_LIST = 'RECEIVE_UPDATED_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_CARD_ORDER = 'RECEIVE_CARD_ORDER';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';

const receiveNewList = (list) => ({
    type: RECEIVE_NEW_LIST,
    list
});

const receiveUpdatedList = (list) => ({
    type: RECEIVE_UPDATED_LIST,
    list
});

const removeList = (list) => ({
    type: REMOVE_LIST,
    list
})

const receiveCardOrder = (cardOrder, listId) => ({
    type: RECEIVE_CARD_ORDER,
    cardOrder,
    listId
})

const receiveListErrors = (errors) => ({
    type: RECEIVE_LIST_ERRORS,
    errors
});

export const createList = (list) => (dispatch) => {
    ListAPI.createList(list)
        .then(list => dispatch(receiveNewList(list)))
        .fail(errors => console.log(errors.responseJSON))
        // .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
};

export const updateList = (list) => (dispatch) => {
    ListAPI.updateList(list)
        .then(list => dispatch(receiveUpdatedList(list)))
        .fail(errors => console.log(errors.responseJSON))
        // .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
};

// dispatch this action to 2 different lists
export const reorderCards = (cardOrder, listId) => (dispatch, getState) => {
    dispatch(receiveCardOrder(cardOrder, listId))
    ListAPI.reorderCards(cardOrder, listId)
    .then(res => console.log(res))
    .fail(errors => console.log(errors.responseJSON))
    // .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
};

export const deleteList = (listId) => (dispatch) => {
    ListAPI.deleteList(listId)
        .then(list => dispatch(removeList(list)))
        .fail(errors => console.log(errors.responseJSON))
        // .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
};

//frontend shape:
// let state = {
//     listOrder: [47,94,62],
//     cardOrders: {
//         94: [2, 5, 3, 8],
//         47: [1, 12, 7],
//         62: [9, 4]
//     }
// }