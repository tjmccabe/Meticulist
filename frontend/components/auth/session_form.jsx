import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.disabled = this.disabled.bind(this);
        this.demo = this.demo.bind(this);
        this.demoing = false;
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.disabled() === 'enabled') {
            this.props.processForm(this.state)
        }
    }

    handleChange(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    disabled() {
        return Object.values(this.state).every(v => v) ? 'enabled' : 'disabled';
    }

    demo() {
        if (this.demoing) return;
        this.demoing = true;
        
        const eInput = document.getElementById('email-input');
        const pInput = document.getElementById('password-input');
        const demoEmail = "demo@user.com";
        const demoPass = "12345678";
        let ei = 0;
        let pi = 0;

        const typePass = () => {
            if (pi <= demoPass.length) {
                pInput.value = demoPass.substr(0, pi++);
                setTimeout(() => typePass(), 75);
            } else {
                setTimeout(() => this.props.processForm({
                    email: 'demo@user.com',
                    password: '12345678'
                }), 200)
            }
        }

        const typeEmail = () => {
            if (ei <= demoEmail.length) {
                eInput.value = demoEmail.substr(0, ei++);
                setTimeout(() => typeEmail(), 65);
            } else typePass()
        }

        typeEmail();
    }

    render() {
        const {formType, errors} = this.props;

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
        );

        const SessionErrors = errors[0] ? (
            <div className="session-errors">{errors[0]}</div>
        ) : null;

        const DemoButton = formType === 'Log In' ? (
            <button className="demo-button" onClick={this.demo}>Log In as Demo User</button>
        ) : null;

        return (
            <div className="outer-session-form">
                <div className="session-header">
                    <h1 id='session-logo'>Meticulist</h1>
                </div>
                <div className="account-form">
                    <form className={["session-form", `${this.disabled()}`].join(' ')} onSubmit={this.handleSubmit}>
                        {SessionErrors}
                        <div className='top-text'>{TopText}</div>
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
                        <button className={this.disabled()}>{formType}</button>
                    </form>
                    {DemoButton}
                    <hr></hr>
                    {AltFormLink}
                </div>
                <div id="session-background">
                    <img src="https://meticulist-seeds.s3-us-west-1.amazonaws.com/list.png" alt="list" />
                    <img src="https://meticulist-seeds.s3-us-west-1.amazonaws.com/productive.png" alt="productive" />
                </div>
            </div>
        )
    }
}

export default SessionForm;