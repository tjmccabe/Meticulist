import React from 'react';
import { Link } from 'react-router-dom';

const TempBar = ({ logout, currentUser }) => {
    const Greeting = currentUser ? (
        <div className="temp-bar">
            <p>Welcome to Meticulist, {currentUser.username}!</p>
            <button onClick={logout} >Log Out</button>
        </div>
    ) : (
            <div className="temp-bar">
                Welcome to Meticulist!
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        );

    return (
        Greeting
    )
}

export default TempBar;