export const fetchBoards = () => (
    $.ajax({
        method: "GET",
        url: '/api/boards'
    })
);

export const fetchBoard = (boardId) => (
    $.ajax({
        method: "GET",
        url: `/api/boards/${boardId}`
    })
);

export const createBoard = (board) => (
    $.ajax({
        method: "POST",
        url: '/api/boards',
        data: {board}
    })
);

export const updateBoard = (board) => (
    $.ajax({
        method: "PATCH",
        url: `/api/boards/${board.id}`,
        data: {board}
    })
);

export const reorderLists = (listOrder, boardId) => (
    $.ajax({
        method: "PATCH",
        url: `/api/boards/${boardId}`,
        data: { board: { listOrder } }
        // MAY HAVE TO REVISIT TO FORMAT DIFFERENTLY

        // data: {board: Object.assign(board, {listOrder})}
    })
);

export const deleteBoard = (boardId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/boards/${boardId}`
    })
);