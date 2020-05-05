import React from 'react';

const AccountDropdown = ({currentUser, currentDropdown, logout, closeDropdowns}) => {
    const classes = (currentDropdown === 'account') ?
        "dropdown-content right-set shown"
        : "dropdown-content right-set"

    return(
        <div id="account-dropdown" className={classes}>
            <div className="dropdown-header">
                <span id="currentUser">
                    {currentUser.username} {`(${currentUser.email})`}
                </span>
                <span className="material-icons close-dd" onClick={closeDropdowns}>
                    clear
                </span>
            </div>
            <hr/>
            <div className="dropdown-options">
                <li>Stuff</li>
                <li>More stuff</li>
                <li>Even more stuff</li>
                <hr/>
                <li onClick={logout}>Log Out</li>
            </div>
        </div>
    )
}

export default AccountDropdown;