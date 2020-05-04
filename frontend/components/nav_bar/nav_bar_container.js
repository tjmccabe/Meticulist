import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {fetchBoards, fetchBoard} from '../../actions/board_actions';
import {boardWithImageSelector} from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    // debugger
    return {
    currentUser: state.entities.users[state.session.id],
    personalBoards: Object.values(state.entities.boards)
        .filter(b => b.adminId === state.session.id),
    sharedBoards: Object.values(state.entities.boards)
        .filter(b => b.adminId !== state.session.id),
    boardWithImage: boardWithImageSelector(state, ownProps)
}
};

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    openModal: () => dispatch(openModal('newBoard'))
});

export default connect(mSTP, mDTP)(NavBar);