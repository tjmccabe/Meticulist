import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {fetchBoards} from '../../actions/board_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    personalBoards: Object.values(state.entities.boards)
        .filter(b => b.adminId === state.session.id),
    sharedBoards: Object.values(state.entities.boards)
        .filter(b => b.adminId !== state.session.id)
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: () => dispatch(openModal('newBoard'))
});

export default connect(mSTP, mDTP)(NavBar);