import React from 'react';

const HelpDropdown = ({ currentUser, logout, closing }) => {
    return (
        <div id="help-dropdown" className="dropdown-content right-set">
            <div className="dropdown-header">
                <span>
                    Info/Tutorial
                </span>
                <span className="material-icons close-dd" onClick={closing}>
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