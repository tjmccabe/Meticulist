import React from 'react';
import {Link} from 'react-router-dom'
import BoardsDropdown from './boards_dropdown';
import AccountDropdown from './account_dropdown';
import HelpDropdown from './help_dropdown';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.dropshow = this.dropshow.bind(this);
    }

    componentDidMount() {
        window.addEventListener("mouseup", this.errantClick, false)
    }

    componentWillUnmount() {
        window.removeEventListener("mouseup", this.errantClick, false)
    }

    closing() {
        let ddButs = $(".dropdown-content");
        ddButs.removeClass("shown")
        let parent = $(".parent");
        parent.removeClass("parent");
    }

    errantClick(e) {
        let ddButs = $(".shown");
        let parent = $(".parent");
        if (ddButs[0] && ddButs[0].contains(e.target)) return;
        // if they clicked the corresponding button again, return
        if (parent[0] && parent[0].contains(e.target)) return;
        ddButs.removeClass("shown");
        parent.removeClass("parent");
    }
    
    dropshow(ddtitle) {
        return (e) => {
            const ele = $(`#${ddtitle}-dropdown`);
            ele.toggleClass("shown");
            $(e.target).toggleClass("parent")
        }
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
                        <button
                            className='dropdown boards'
                            onClick={this.dropshow('boards')}
                        >
                            <div className="dropbtn">
                                <span className="material-icons">
                                    dashboard
                                </span>
                                Boards
                            </div>
                        </button>
                        <BoardsDropdown currentUser={currentUser} closing={this.closing}/>
                        {/* <button>Placeholder(SearchImg)</button> */}
                    </ul>
                </div>
                <Link className="nav-bar-middle" to="/">
                    <span id="logo">
                        Meticulist
                    </span>
                </Link>
                <div className="nav-bar-right">
                    <ul className="nav-bar-list">
                        <button className='modal image'>
                            <span className="material-icons" id="add">
                                add
                            </span>
                        </button>
                        <button
                            className='dropdown image dropbtn'
                            onClick={this.dropshow('help')}
                        >
                            <div className="dropbtn">
                                <span className="material-icons">
                                    help_outline
                                </span>
                            </div>
                        </button>
                        <HelpDropdown closing={this.closing}/>
                        <button
                            id="options"
                            className='dropdown'
                            onClick={this.dropshow('account')}
                        >
                            <div className="dropbtn">
                                {this.props.currentUser.username[0]}
                            </div>
                        </button>
                        <AccountDropdown
                            currentUser={currentUser}
                            logout={logout}
                            closing={this.closing}
                        />
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;