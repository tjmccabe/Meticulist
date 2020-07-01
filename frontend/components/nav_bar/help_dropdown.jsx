import React from 'react';
import { FaLinkedin, FaGithub, FaAngellist, FaUserCircle, FaTrello } from "react-icons/fa";

const HelpDropdown = ({ currentDropdown,
    currentUser,
    logout,
    closeDropdowns,
    openModal
    }) => {
    const classes = (currentDropdown === 'help') ?
        "dropdown-content right-set shown"
        : "dropdown-content right-set"

    return (
        <div id="help-dropdown" className={classes}>
            <div className="dropdown-header">
                <span>
                    Meticulist was created by TJ McCabe
                </span>
                <span className="material-icons close-dd" onClick={closeDropdowns}>
                    clear
                </span>
            </div>
            <hr />
            <div className="help-links">
                <li
                    className="help-link"
                    onClick={() => window.open("https://tjmccabe.me/", "_blank")}
                >
                    <FaUserCircle className="help-logo" />
                    Portfolio
                </li>
                <li
                    className="help-link"
                    onClick={() => window.open("https://www.linkedin.com/in/tj-mccabe/", "_blank")}
                >
                    <FaLinkedin className="help-logo" />
                    LinkedIn
                </li>
                <li
                    className="help-link"
                    onClick={() => window.open("https://github.com/tjmccabe/Meticulist", "_blank")}
                >
                    <FaGithub className="help-logo" />
                    GitHub
                </li>
                <li
                    className="help-link"
                    onClick={() => window.open("https://angel.co/u/tj-mccabe-3", "_blank")}
                >
                    <FaAngellist className="help-logo" />
                    AngelList
                </li>
                <hr />
                <li
                    className="help-link"
                    onClick={() => window.open("https://www.trello.com", "_blank")}
                >
                    <FaTrello className="help-logo" />
                    Inspired by Trello
                </li>
                <hr />
                <li
                    onClick={() => {closeDropdowns(); openModal("instructions")}}
                >
                    Meticulist Instructions
                </li>
            </div>
        </div>
    )
}

export default HelpDropdown;