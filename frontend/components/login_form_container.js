import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../actions/session_actions';

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'Log In',
    user: {
        email: '',
        password: ''
    }
});

const mDTP = (dispatch) => ({
    processForm: formUser => dispatch(login(formUser))
});

export default connect(mSTP, mDTP)(SessionForm);