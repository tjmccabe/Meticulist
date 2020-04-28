import React from 'react';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    handleChange(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        const {formType} = this.props;

        const UsernameField = formType === 'Sign Up' ? (
            <input
                id="username-input"
                type="text"
                value={this.state.username}
                placeholder="Enter username"
                onChange={this.handleChange('username')}
            />
        ) : null;

        const AltFormLink = formType === 'Sign Up' ? (
            <Link className="alt-form-link" to="/login">
                Already have an account? Log In
            </Link>
        ) : (
            <Link className="alt-form-link" to="/signup">
                Sign up for an account
            </Link>
        );

        const TopText = formType === 'Sign Up' ? (
            'Sign up for your account'
        ) : (
            'Log in to Meticulist'
        )

        return (
            <div>
                {TopText}
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <input
                        id="email-input"
                        type="text"
                        value={this.state.email}
                        placeholder="Enter email"
                        onChange={this.handleChange('email')}
                    />
                    {UsernameField}
                    <input
                        id="password-input"
                        type="password"
                        value={this.state.password}
                        placeholder={formType === 'Sign Up' ? "Create password" : "Enter password"}
                        onChange={this.handleChange('password')}
                    />
                    <button>{formType}</button>
                </form>
                {AltFormLink}
            </div>
        )
    }
}

export default SessionForm;