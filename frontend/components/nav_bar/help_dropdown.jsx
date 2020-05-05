import React from 'react';

const HelpDropdown = ({ currentDropdown, currentUser, logout, closeDropdowns }) => {
    const classes = (currentDropdown === 'help') ?
        "dropdown-content right-set shown"
        : "dropdown-content right-set"

    return (
        <div id="help-dropdown" className={classes}>
            <div className="dropdown-header">
                <span>
                    Info/Tutorial
                </span>
                <span className="material-icons close-dd" onClick={closeDropdowns}>
                    clear
                </span>
            </div>
            <hr />
            <div className="help-links">
                <li>Help image</li>
                <hr />
                <li>Click for Tutorial Overlay</li>
            </div>
        </div>
    )
}

export default HelpDropdown;