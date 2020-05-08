export const createList = (list) => (
    $.ajax({
        method: "POST",
        url: '/api/lists',
        data: {list}
    })
);

export const updateList = (list) => (
    $.ajax({
        method: "PATCH",
        url: `/api/lists/${list.id}`,
        data: {list}
    })
);

export const reorderCards = (cardOrder, listId) => (
    $.ajax({
        method: "PATCH",
        url: `/api/lists/${listId}`,
        data: {list: {card_order: JSON.stringify(cardOrder)}}
    })
);

export const deleteList = (listId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/lists/${listId}`
    })
);