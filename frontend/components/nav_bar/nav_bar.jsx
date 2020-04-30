import React from 'react';
import {Link} from 'react-router-dom'
import BoardsDropdown from './boards_dropdown';
import AccountDropdown from './account_dropdown';
import HelpDropdown from './help_dropdown';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {currentUser, logout} = this.props
        return (
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <ul className="nav-bar-list">
                        <button className="link image">
                            <span className="material-icons">
                                home
                            </span>
                        </button>
                        <button className='dropdown boards'>
                            <div className="dropbtn">
                                <span className="material-icons">
                                    dashboard
                                </span>
                                Boards
                            </div>
                        </button>
                        <BoardsDropdown currentUser={currentUser}/>
                        {/* <button>Placeholder(SearchImg)</button> */}
                    </ul>
                    <Link to="/">
                        <span id="logo" className="nav-bar-middle">
                            Meticulist
                        </span>
                    </Link>
                </div>
                <div className="nav-bar-right">
                    <ul className="nav-bar-list">
                        <button className='modal image'>
                            <span className="material-icons" id="add">
                                add
                            </span>
                        </button>
                        <button className='dropdown image dropbtn'>
                            <div className="dropbtn">
                                <span className="material-icons">
                                    help_outline
                                </span>
                            </div>
                        </button>
                        <HelpDropdown/>
                        <button id="options" className='dropdown'>
                            <div className="dropbtn">
                                {this.props.currentUser.username[0]}
                            </div>
                        </button>
                        <AccountDropdown
                            currentUser={currentUser}
                            logout={logout}
                            className="dropdown-content"
                        />
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;