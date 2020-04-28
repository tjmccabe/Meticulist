import { connect } from 'react-redux';
import TempBar from './temp_bar';
import { logout } from '../actions/session_actions';

const mSTP = ({ entities, session }) => ({
    currentUser: entities.users[session.id]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(TempBar)