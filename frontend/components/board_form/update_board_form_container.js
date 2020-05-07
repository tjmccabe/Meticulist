import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { receiveErrors, updateBoard, deleteBoard } from '../../actions/board_actions';
import {
    fetchSearchResults,
    fetchRandomResults,
} from '../../actions/unslpash_actions';
import BoardForm from './board_form';

const mSTP = (state) => {
    let boardId = location.hash.split('/')[2]
    let boardState = state.entities.boards[boardId]
    return {
        errors: state.errors.board,
        currentUserId: state.session.id,
        updating: true,
        board: {
            title: boardState.title,
            description: boardState.description,
            admin_id: state.session.id,
            bgp_big_url: boardState.bgpBigUrl,
            bgp_small_url: boardState.bgpSmallUrl,
            bgp_alt_text: boardState.bgpAltText,
            id: boardState.id
        }
    }
}

const mDTP = dispatch => ({
    submitForm: (board) => dispatch(updateBoard(board)),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveErrors([])),
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
    fetchRandomResults: () => dispatch(fetchRandomResults()),
})

export default withRouter(connect(mSTP, mDTP)(BoardForm));