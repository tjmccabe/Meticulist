import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions';
import {receiveErrors, createBoard} from '../../actions/board_actions';
import {
    fetchSearchResults,
    fetchRandomResults,
    clearImages
} from '../../actions/unslpash_actions';
import BoardForm from './board_form';

const mSTP = state => ({
    errors: state.errors.board,
    currentUserId: state.session.id,
    updating: false,
    board: {
        title: '',
        description: '',
        admin_id: state.session.id,
        bgp_big_url: '',
        bgp_small_url: '',
        bgp_alt_text: '',
    }
})

const mDTP = dispatch => ({
    submitForm: (board) => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveErrors([])),
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
    fetchRandomResults: () => dispatch(fetchRandomResults()),
    clearImages: () => dispatch(clearImages())
})

export default withRouter(connect(mSTP, mDTP)(BoardForm));