import {connect} from 'react-redux'
import BoardIndex from './board_index';
import {logout} from '../actions/session_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
    //personalBoards
    //memberBoards
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
    //createBoard
})

export default connect(mSTP, mDTP)(BoardIndex);