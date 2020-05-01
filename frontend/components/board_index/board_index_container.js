import {connect} from 'react-redux'
import BoardIndex from './board_index';
import {fetchBoards} from '../../actions/board_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards)
    //personalBoards
    //memberBoards
})

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards())
    //createBoard
})

export default connect(mSTP, mDTP)(BoardIndex);