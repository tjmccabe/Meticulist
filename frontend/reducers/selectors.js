export const boardShowPageSelector = (state, ownProps) => {
    let path = ownProps.location.pathname.split('/')
    
    if (!path[1] || !path[2] || path[1] !== 'boards') {
        return false;
    } else if (!state.entities.boards[path[2]]) {
        return false;
    } else return true;
}

export const getCardOrders = (state, listOrder) => {
    if (!listOrder) return {};
    let h = {}
    listOrder.forEach(listId => { h[listId] = state.entities.lists[listId].cardOrder})
    return h;
}


//frontend shape:
let state = {
    listOrder: [47, 94, 62],
    cardOrders: {
        94: [2, 5, 3, 8],
        47: [1, 12, 7],
        62: [9, 4]
    }
}