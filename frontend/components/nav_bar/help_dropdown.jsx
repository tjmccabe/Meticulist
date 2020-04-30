import React from 'react';

const HelpDropdown = ({ currentUser, logout }) => {
    return (
        <div id="Help-dropdown" className="dropdown-content right-set">
            <div className="dropdown-header">
                <span id="currentUser">
                    Info/Tutorial
                </span>
                <span className="material-icons close-dd">
                    clear
                </span>
            </div>
            <hr />
            <div className="Help-links">
                <li>Help image</li>
                <hr />
                <li>Click for Tutorial Overlay</li>
            </div>
        </div>
    )
}

export default HelpDropdown;