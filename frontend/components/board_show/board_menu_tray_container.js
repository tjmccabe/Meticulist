import {connect} from 'react-redux';
import BoardMenuTray from './board_menu_tray';
import {deleteBoard} from '../../actions/board_actions';
import {openModal} from '../../actions/modal_actions';
import {closeTray} from '../../actions/tray_actions'

const mSTP = (state, ownProps) => ({
    board: ownProps.board,
    boardMemberIds: state.entities.boards.memberIds,
    trayActive: state.ui.trayActive
});

const mDTP = (dispatch) => ({
    openModal: () => dispatch(openModal('updateBoard')),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    closeTray: () => dispatch(closeTray())
});

export default connect(mSTP, mDTP)(BoardMenuTray);