import * as bAPI from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
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

export const deleteBoard = (boardId) => (dispatch) => (
    bAPI.deleteBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);