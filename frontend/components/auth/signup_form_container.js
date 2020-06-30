import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';
import { signup, receiveErrors } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    const email = ownProps.location.search ? (
        ownProps.location.search.split("=")[1]
    ) : "";

    return {
    errors: state.errors.session,
    formType: 'Sign Up',
    user: {
        email,
        username: '',
        password: ''
    }
}};

const mDTP = (dispatch) => ({
    processForm: formUser => dispatch(signup(formUser)),
    clearErrors: () => dispatch(receiveErrors([]))
});

export default withRouter(connect(mSTP, mDTP)(SessionForm));