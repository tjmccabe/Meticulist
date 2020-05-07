import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {} from '../../actions/list_actions';
import {} from '../../actions/card_actions';
import {} from '../../actions/board_actions';
import {getCardOrders} from '../../reducers/selectors';
import ListIndex from './list_index';

const mSTP = (state, ownProps) => {
    let boardId = ownProps.match.params.boardId
    let listOrder = state.entities.boards[boardId].listOrder || [];
    let cardOrders = getCardOrders(state, listOrder)
    return {
        listOrder,
        cardOrders
    }
}

const mDTP = (dispatch) => ({

})

export default withRouter(connect(mSTP, mDTP)(ListIndex))

// case RECEIVE_LIST:
//     if indexOf() return state;
//     else append to listOrder