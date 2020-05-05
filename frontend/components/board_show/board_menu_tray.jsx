import React from 'react';
import {withRouter} from 'react-router-dom';

const BoardMenuTray = ({board, openModal, deleteBoard, trayActive, closeTray, history}) => {
    const redirectOnDelete = (boardId) => {
        return () => {
            deleteBoard(boardId)
                .then(() => history.push(`/boards/`));
        }
    }

    const TrayList = board.admin ? (
        <div className="tray-list">
            <div className="stat">
                <div className="stat-heading">Title</div>
                <div className="stat-content">{board.title}</div>
            </div>
            {board.description ? <div className="stat">
                <div className="stat-heading">Description</div>
                <div className="stat-content">{board.description}</div>
            </div> : null }
            <div className="stat">
                <div className="stat-heading">Admin</div>
                <div className="stat-content">{board.admin.username}</div>
                <div className="stat-content">{board.admin.email}</div>
            </div>
            <div ><button className="tray-button edit" onClick={openModal}>Edit Board</button></div>
            <div ><button className="tray-button delete" onClick={redirectOnDelete(board.id)}>Delete Board (Permanent)</button></div>
        </div>
    ) : null;

    const active = trayActive ? "board-menu-tray-outer tray-active" : "board-menu-tray-outer"
    
    return board.admin ? (
        <div className={active}>
            <div className="tray-header">
                <h3 id="just-menu">
                    Menu
                </h3>
                <span className="material-icons close-tray" onClick={closeTray}>
                    clear
                </span>
            </div>
            <hr />
            <div className="tray-content">
                <h3>Board Details</h3>
                {TrayList}
                <hr />
                <h3>Board Members</h3>
                <div className="tray-list">
                    <div className="tray-member">{board.admin.username}</div>
                </div>
            </div>
        </div>
    ) : null;
}

export default withRouter(BoardMenuTray);