import React from 'react';
// import MyBoards element with conditional header- if they don't have boards, it doesn't show
// same with shared boards

const BoardsDropdown = ({ currentUser, logout, closing }) => {
    return (
        <div id="boards-dropdown" className="dropdown-content left-set">
            <div className="dropdown-header">
                <span>
                    All Boards
                </span>
                <span className="material-icons close-dd" onClick={closing}>
                    clear
                </span>
            </div>
            <hr />
            <div className="boards-header">
                <span className="material-icons img">
                    dashboard
                </span>
                <span id="my-boards">
                    PERSONAL BOARDS
                </span>
            </div>
            <div className="board-links">
                <li>Board Link #1</li>
                <li>Board Link #2</li>
                <li>Board Link #3</li>
            </div>
            <div className="new-board">
                <li>Create new board...</li>
            </div>
        </div>
    )
}

export default BoardsDropdown;