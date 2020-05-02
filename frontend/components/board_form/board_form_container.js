import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions';
import {receiveErrors, createBoard} from '../../actions/board_actions';
import {fetchSearchResults, receiveSearchResults} from '../../actions/unslpash_actions';
import BoardForm from './board_form';

const mSTP = state => ({
    errors: state.errors.board,
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    createBoard: (board) => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveErrors([])),
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
    clearSearchResults: () => dispatch(receiveSearchResults({}))
})

export default connect(mSTP, mDTP)(BoardForm);