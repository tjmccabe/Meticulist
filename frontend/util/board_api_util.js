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

export const reorderLists = (listOrder, boardId) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/boards/${boardId}`,
        data: { board: { list_order: JSON.stringify(listOrder) } }
    })
}

export const deleteBoard = (boardId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/boards/${boardId}`
    })
);