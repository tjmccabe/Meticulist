import React from 'react';

class BoardShowBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {board, currentBoard} = this.props;
    //Personal Just Me
    //Personal Shared with others
    //Shared with me

    return(
      <div className='board-show-bar'>
        <div className='board-show-bar-left'>
          <div className="board-show-bar-title-wrapper">
            <div className="board-show-bar-title">
              {board.title}
            </div>
          </div>
          <button className="modal image">
            <span className="material-icons">
              edit
            </span>
          </button>
          <hr/>
          <div className="shared-indicator">
            Personal (Just Me)
          </div>
          <hr/>
          <div className="members-container">
            <div className="dropbtn">
              { board.admin ? board.admin.username.substring(0,2) : null}
            </div>
          </div>
          <button className="invite-button dropdown dropbtn">
            <div className="dropbtn">
              Invite
            </div>
          </button>
        </div>
        <div className='board-show-bar-right'>
          <button
            className='menu-tray-button'
            // onClick={}
          >
            <div className="menu-btn">
              <span className="material-icons">
                more_horiz
              </span>
                Show Menu
            </div>
          </button>
        </div>
      </div>
    )
  }
}

export default BoardShowBar;