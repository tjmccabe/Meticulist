import {connect} from 'react-redux';
import BoardShow from './board_show';
import {
    fetchBoard,
    updateBoard,
    deleteBoard
} from '../../actions/board_actions';

//this is where we use selectors (from the reducers folder)

const mSTP = (state, ownProps) => {
    let currentBoardId = ownProps.match.params.boardId
    return{
    board: state.entities.boards[currentBoardId],
}};

const mDTP = (dispatch, ownProps) => ({
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    updateBoard: (board) => dispatch(updateBoard(board))
});

export default connect(mSTP, mDTP)(BoardShow);