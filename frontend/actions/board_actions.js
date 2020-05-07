import * as bAPI from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_LIST_ORDER = 'RECEIVE_LIST_ORDER';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

const receiveBoards = (boards) => ({
    type: RECEIVE_BOARDS,
    boards
});

const receiveBoard = (payload) => ({
    type: RECEIVE_BOARD,
    payload
});

const removeBoard = (boardId) => ({
    type: REMOVE_BOARD,
    boardId
});

const receiveListOrder = (listOrder, boardId) => ({
    type: RECEIVE_LIST_ORDER,
    listOrder,
    boardId
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
});

export const fetchBoards = () => (dispatch) => (
    bAPI.fetchBoards()
        .then(boards => dispatch(receiveBoards(boards)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchBoard = (boardId) => (dispatch) => {
    return bAPI.fetchBoard(boardId)
        .then(payload => dispatch(receiveBoard(payload)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const createBoard = (board) => (dispatch) => (
    bAPI.createBoard(board)
        .then(payload => dispatch(receiveBoard(payload)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateBoard = (board) => (dispatch) => (
    bAPI.updateBoard(board)
        .then(payload => dispatch(receiveBoard(payload)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const reorderLists = (listOrder, boardId) => (dispatch, getState) => {
    dispatch(receiveListOrder(listOrder, boardId))
    bAPI.reorderLists(listOrder, boardId)
        .then(res => console.log(res))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const deleteBoard = (boardId) => (dispatch) => (
    bAPI.deleteBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);