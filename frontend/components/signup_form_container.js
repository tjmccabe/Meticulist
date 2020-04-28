import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'Sign Up',
    user: {
        email: '',
        username: '',
        password: ''
    }
});

const mDTP = (dispatch) => ({
    processForm: formUser => dispatch(signup(formUser))
});

export default connect(mSTP, mDTP)(SessionForm);