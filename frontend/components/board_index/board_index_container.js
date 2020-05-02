import {connect} from 'react-redux'
import BoardIndex from './board_index';
import {fetchBoards} from '../../actions/board_actions'
import { openModal } from '../../actions/modal_actions';
import {fetchRandomResults} from '../../actions/unslpash_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    personalBoards: Object.values(state.entities.boards)
        .filter(b => b.adminId === state.session.id),
    sharedBoards: Object.values(state.entities.boards)
        .filter(b => b.adminId !== state.session.id)
})

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: () => dispatch(openModal('newBoard')),
})

export default connect(mSTP, mDTP)(BoardIndex);