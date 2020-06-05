import React from 'react';
import { Link } from 'react-router-dom';

const LoginBar = (props) => {
    return (
        <div className="login-bar">
            <div className="login-bar-title">
                <div className="met-login-icon"></div>
                <h1 id='login-logo'>Meticulist</h1>
            </div>
            <div className="login-links">
                <Link to="/login" className="btn" id="login-btn">Log In</Link>
                <Link to="/signup" className="btn" id="signup-btn">Sign Up</Link>
            </div>
        </div>
    )
}

export default LoginBar;