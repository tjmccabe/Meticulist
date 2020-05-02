import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal('newBoard'))
});

export default connect(mSTP, mDTP)(NavBar);