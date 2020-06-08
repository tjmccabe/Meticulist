import {connect} from 'react-redux';
import BoardShow from './board_show';
import {fetchBoard, updateBoard} from '../../actions/board_actions';
import {openModal} from '../../actions/modal_actions'
import {openTray} from '../../actions/tray_actions';

//this is where we use selectors (from the reducers folder)

const mSTP = (state, ownProps) => {
    let currentBoardId = ownProps.match.params.boardId
    return{
    board: state.entities.boards[currentBoardId],
    currentBoardId
}};

const mDTP = (dispatch, ownProps) => ({
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    updateBoard: (board) => dispatch(updateBoard(board)),
    openModal: () => dispatch(openModal('updateBoard')),
    openTray: () => dispatch(openTray())
});

export default connect(mSTP, mDTP)(BoardShow);