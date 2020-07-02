import React from 'react';
import {withRouter} from 'react-router-dom'

const AccountDropdown = ({
    currentUser,
    currentDropdown,
    logout,
    closeDropdowns,
    openModal,
    history }) => {

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
                <li
                    onClick={() => {closeDropdowns(); history.push('/boards')}}
                >
                    View all my boards
                </li>
                <li
                    onClick={() => {closeDropdowns(); openModal("newBoard")}}
                >
                    Create a new board
                </li>
                <hr/>
                <li onClick={logout}>Log Out</li>
            </div>
        </div>
    )
}

export default withRouter(AccountDropdown);