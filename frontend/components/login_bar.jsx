import React from 'react';
import { Link } from 'react-router-dom';

const LoginBar = (props) => {
    return (
        <div className="login-bar">
            <h1 id='login-logo'>Meticulist</h1>
            <div className="login-links">
                <Link to="/login" className="btn" id="login-btn">Log In</Link>
                <Link to="/signup" className="btn" id="signup-btn">Sign Up</Link>
            </div>
        </div>
    )
}

export default LoginBar;