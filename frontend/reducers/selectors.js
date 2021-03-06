export const boardShowPageSelector = (state, ownProps) => {
    let path = ownProps.location.pathname.split('/')
    
    if (!path[1] || !path[2] || path[1] !== 'boards') {
        return false;
    } else if (!state.entities.boards[path[2]]) {
        return false;
    } else return true;
}

export const getCardOrders = (state, listOrder) => {
    if (!listOrder || listOrder.length === 0 ) return {};
    let h = {}
    listOrder.forEach(listId => { h[parseInt(listId)] = state.entities.lists[listId].cardOrder})
    return h;
}

export const getLists = (state, listOrder) => {
    let h = {}
    listOrder.forEach(listId => { h[parseInt(listId)] = state.entities.lists[listId] })
    return h;
}

export const getCards = (state, cardOrder) => {
    let h = {}
    cardOrder.forEach(cardId => h[parseInt(cardId)] = state.entities.cards[cardId])
    return h;
}

export const getComments = (state, card) => {
    let comments = [];
    card.commentIds.forEach(commentId => comments.push(state.entities.comments[commentId]))
    return comments.reverse();
}

export const getEntity = (state, type, id) => {
    return type === "board" ? (
        state.entities.boards[id]
    ) : type === "list" ? (
        state.entities.lists[id]
    ) : type === "card" ? (
        state.entities.cards[id]
    ) : null;
}