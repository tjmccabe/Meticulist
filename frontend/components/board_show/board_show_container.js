import {connect} from 'react-redux';
import BoardShow from './board_show';
import {
    fetchBoard,
    updateBoard,
    deleteBoard
} from '../../actions/board_actions';
import {openModal} from '../../actions/modal_actions'

//this is where we use selectors (from the reducers folder)

const mSTP = (state, ownProps) => {
    let currentBoardId = ownProps.match.params.boardId
    return{
    board: state.entities.boards[currentBoardId],
    currentBoardId: currentBoardId
}};

const mDTP = (dispatch, ownProps) => ({
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    updateBoard: (board) => dispatch(updateBoard(board)),
    openModal: () => dispatch(openModal('updateBoard'))
});

export default connect(mSTP, mDTP)(BoardShow);