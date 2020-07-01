import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchBoards, fetchBoard } from '../../actions/board_actions';
import { boardShowPageSelector } from '../../reducers/selectors';
import { openDropdown, closeDropdowns } from '../../actions/dropdown_actions';
import NavBar from './nav_bar';

const mSTP = (state, ownProps) => {
    return {
    currentUser: state.entities.users[state.session.id],
    personalBoards: Object.values(state.entities.boards)
        .filter(b => b.adminId === state.session.id),
    sharedBoards: Object.values(state.entities.boards)
        .filter(b => b.adminId !== state.session.id),
    boardShowPage: boardShowPageSelector(state, ownProps),
    currentDropdown: state.ui.dropdown
}
};

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    openModal: modal => dispatch(openModal(modal)),
    openDropdown: (dropdown) => dispatch(openDropdown(dropdown)),
    closeDropdowns: () => dispatch(closeDropdowns())
});

export default connect(mSTP, mDTP)(NavBar);