import React from 'react';
import {Link} from 'react-router-dom'
import BoardsDropdown from './boards_dropdown';
import AccountDropdown from './account_dropdown';
import HelpDropdown from './help_dropdown';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.prevDropdown = null;
        this.closing = this.closing.bind(this)
        this.dropdownCheck = this.dropdownCheck.bind(this)
    }

    componentDidMount() {
        window.addEventListener("mouseup", this.closing, false)
    }

    componentWillUnmount() {
        window.removeEventListener("mouseup", this.closing, false)
    }

    closing(e) {
        if (!this.props.currentDropdown) {
            this.prevDropdown = null;
        } else if (!($(".shown")[0] && $(".shown")[0].contains(e.target))) {
            this.prevDropdown = this.props.currentDropdown;
            this.props.closeDropdowns();
        }
    }

    dropdownCheck(dropdown) {
        if (this.prevDropdown === dropdown) return;
        this.props.openDropdown(dropdown);
    }
    
    render() {
        const {
            currentUser,
            logout,
            openModal,
            fetchBoards,
            personalBoards,
            sharedBoards,
            fetchBoard,
            boardShowPage,
            currentDropdown,
            closeDropdowns
        } = this.props

        const bgpBool = boardShowPage ? "nav-bar board-show" : "nav-bar"

        return (
            <div className={bgpBool}>
                <div className="nav-bar-left">
                    <ul className="nav-bar-list">
                        <Link to="/boards">
                            <button className="link image">
                                <span className="material-icons">
                                    home
                                </span>
                            </button>
                        </Link>
                        <button
                            className='dropdown boards'
                            onClick={() => this.dropdownCheck('boards')}
                        >
                            <div className="dropbtn">
                                <div className="boards-icon"></div>
                                Boards
                            </div>
                        </button>
                        <BoardsDropdown
                            closeDropdowns={closeDropdowns}
                            currentDropdown={currentDropdown}
                            openModal={openModal}
                            fetchBoards={fetchBoards}
                            personalBoards={personalBoards}
                            sharedBoards={sharedBoards}
                            fetchBoard={fetchBoard}
                        />
                        {/* <button>Placeholder(SearchImg)</button> */}
                    </ul>
                </div>
                <Link className="nav-bar-middle" to="/">
                    <div className="met-icon"></div>
                    <span id="logo">
                        Meticulist
                    </span>
                </Link>
                <div className="nav-bar-right">
                    <ul className="nav-bar-list">
                        <button
                            className='modal image'
                            onClick={openModal}
                        >
                            <span className="material-icons" id="add">
                                add
                            </span>
                        </button>
                        <button
                            className='dropdown image dropbtn'
                            onClick={() => this.dropdownCheck('help')}
                        >
                            <div className="dropbtn">
                                <span className="material-icons">
                                    help_outline
                                </span>
                            </div>
                        </button>
                        <HelpDropdown
                            closeDropdowns={closeDropdowns}
                            currentDropdown={currentDropdown}
                        />
                        <button
                            id="options"
                            className='dropdown'
                            onClick={() => this.dropdownCheck('account')}
                        >
                            <div className="dropbtn">
                                {this.props.currentUser.username.substring(0,2)}
                            </div>
                        </button>
                        <AccountDropdown
                            currentUser={currentUser}
                            logout={logout}
                            closeDropdowns={closeDropdowns}
                            currentDropdown={currentDropdown}
                        />
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;