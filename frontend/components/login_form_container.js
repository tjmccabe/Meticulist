import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, receiveErrors } from '../actions/session_actions';

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'Log In',
    user: {
        email: '',
        password: ''
    }
});

const mDTP = (dispatch) => ({
    processForm: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mSTP, mDTP)(SessionForm);