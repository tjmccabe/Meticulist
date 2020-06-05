import React from 'react';
import {Link} from 'react-router-dom';
// import MyBoards element with conditional header- if they don't have boards, it doesn't show
// same with shared boards

class BoardsDropdown extends React.Component {
    componentDidMount() {
        this.props.fetchBoards()
    }

    render() {
        const {
            closeDropdowns,
            currentDropdown,
            openModal,
            personalBoards,
            sharedBoards,
            fetchBoard
        } = this.props

        const PersonalBoardsEle = personalBoards[0] ? (
            <>
                <div className="boards-header">
                    <div className="met-dd-icon"></div>
                    <span id="my-boards">
                        PERSONAL BOARDS
                    </span>
                </div>
                <ul className="board-buttons">
                    {personalBoards.map((board, index) => (
                        <div
                            key={index}
                            className="board-button-wrapper"
                            onClick={closeDropdowns}
                        >
                            <button
                                style={{ 'backgroundImage': `url("${board.bgpSmallUrl}")`}}
                                onClick={() => fetchBoard(board.id)}
                            >
                                <Link to={`/boards/${board.id}`} className="dimmer">
                                    <div className="tiny-board"></div>
                                    <div className="titley">{board.title}</div>
                                </Link>
                            </button>
                        </div>
                    ))}
                    <li
                        onClick={openModal}
                        id='create-new-board'
                    >
                        Create new board...
                    </li>
                </ul>
            </>
        ) : null


        const SharedBoardsEle = sharedBoards[0] ? (
            <>
                <div className="boards-header">
                    <span className="material-icons img">
                        people_outline
                    </span>
                    <span id="shared-boards">
                        SHARED WITH ME
                    </span>
                </div>
                <ul className="board-buttons">
                    {sharedBoards.map((board, index) => (
                        <div
                            key={index}
                            className="board-button-wrapper"
                        >
                            <button
                                style={{ 'backgroundImage': `url("${board.bgpSmallUrl}")`}}
                                
                            >
                                <Link to={`/boards/${board.id}`} className="dimmer">
                                    <div className="tiny-board"></div>
                                    <div className="titley">{board.title}</div>
                                </Link>
                            </button>
                        </div>
                    ))}
                </ul>
            </>
        ) : null

        const classes = (currentDropdown === 'boards') ? 
            "dropdown-content left-set shown"
            : "dropdown-content left-set"

        return (
            <div id="boards-dropdown" className={classes}>
                <div className="dropdown-header">
                    <span>
                        All Boards
                    </span>
                    <span className="material-icons close-dd" onClick={closeDropdowns}>
                        clear
                    </span>
                </div>
                <hr />
                {PersonalBoardsEle}
                {SharedBoardsEle}
            </div>
        )
    }
}

export default BoardsDropdown;