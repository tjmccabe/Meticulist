import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = state => {
  let cardId = state.ui.modal[1] ? state.ui.modal[1] : null
  return {
    modal: state.ui.modal[0],
    cardId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
