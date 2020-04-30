import React from 'react';

const AccountDropdown = ({currentUser, logout, closing}) => {
    return(
        <div id="account-dropdown" className="dropdown-content right-set">
            <div className="dropdown-header">
                <span id="currentUser">
                    {currentUser.username} {`(${currentUser.email})`}
                </span>
                <span className="material-icons close-dd" onClick={closing}>
                    clear
                </span>
            </div>
            <hr/>
            <div className="dropdown-options">
                <li>Stuff</li>
                <li>More stuff</li>
                <li>Even more stuff</li>
                <hr/>
                <li onClick={logout}>Log Out (Actually works)</li>
            </div>
        </div>
    )
}

export default AccountDropdown;