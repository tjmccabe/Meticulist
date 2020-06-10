import React from 'react';
import BoardMenuTrayContainer from './board_menu_tray_container';

class BoardShowBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: this.props.board.title,
    }

    this.retitle = this.retitle.bind(this)
    this.resize = this.resize.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps && this.props.board.title !== prevProps.board.title) {
      this.setState({ titleInput: this.props.board.title}, this.resize)
    }
  }

  handleChange() {
    return e => {
      this.setState({titleInput: e.target.value})
    }
  }

  retitle(e) {
    e.preventDefault()
    if (this.state.titleInput.length > 0 && this.state.titleInput !== this.props.board.title) {
      let newBoard = Object.assign(this.props.board, {title: this.state.titleInput})
      this.props.updateBoard(newBoard)
    } else {
      this.setState({ titleInput: this.props.board.title }, this.resize)
    }
    const title = document.getElementById('bTitle')
    title.blur()
  }

  resize() {
    const hide = document.getElementById('hide')
    const title = document.getElementById('bTitle')
    if (title) hide.textContent = title.value;
    if (title) title.style.width = Math.min((hide.offsetWidth + 25),500) + "px";
  }

  render() {
    const {board, openModal, openTray, trayActive} = this.props;
    //Personal Just Me
    //Personal Shared with others
    //Shared with me

    const classes = trayActive ? (
      "menu-tray-button no-display"
    ) : "menu-tray-button"

    this.resize();

    return(
      <div className='board-show-bar'>
        <div className='board-show-bar-left'>
          <form
            className="board-show-bar-title-wrapper"
            onSubmit={(e) => this.retitle(e)}
          >
            <span id="hide"></span>
            <input
              id='bTitle'
              type='text'
              className="board-show-bar-title"
              onChange={this.handleChange()}
              value={this.state.titleInput}
              onBlur={this.retitle}
            />
          </form>
          <button
            className="modal image"
            onClick={() => openModal('updateBoard')}
          >
            <span className="material-icons">
              edit
            </span>
          </button>
          <hr/>
          <button id="shared-indicator">
            <div className="shared-indicator-text btntxt">
              Personal
            </div>
          </button>
          <hr/>
          <div className="members-container">
            <div className="dropbtn name-circle">
              { board.admin ? board.admin.username.substring(0,2) : null}
            </div>
          </div>
          <button className="invite-button dropdown dropbtn">
            <div className="dropbtn btntxt">
              Invite
            </div>
          </button>
        </div>
        <div className='board-show-bar-right'>
          <button
            className={classes}
            onClick={openTray}
          >
            <div className="menu-btn">
              <span className="material-icons">
                more_horiz
              </span>
              <div className="btntxt">
                Show Menu
              </div>
            </div>
          </button>
        </div>
        <BoardMenuTrayContainer
          board={board}
        />
      </div>
    )
  }
}

export default BoardShowBar;