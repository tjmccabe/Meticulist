export const boardShowPageSelector = (state, ownProps) => {
    let path = ownProps.location.pathname.split('/')
    
    if (!path[1] || !path[2] || path[1] !== 'boards') {
        return false;
    } else if (!state.entities.boards[path[2]]) {
        return false;
    } else return true;
}