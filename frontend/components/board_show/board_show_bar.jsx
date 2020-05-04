import React from 'react';

class BoardShowBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: this.props.board.title,
    }

    this.retitle = this.retitle.bind(this)
    this.resize = this.resize.bind(this)
    this.currBoard = this.props.board.id
  }

  componentDidUpdate() {
    if (this.currBoard !== this.props.board.id) {
      this.setState({ titleInput: this.props.board.title})
      this.currBoard = this.props.board.id
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
    if (title) title.style.width = hide.offsetWidth + 20 + "px";
  }

  render() {
    const {board} = this.props;
    //Personal Just Me
    //Personal Shared with others
    //Shared with me

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
          <button className="modal image">
            <span className="material-icons">
              edit
            </span>
          </button>
          <hr/>
          <div className="shared-indicator">
            Personal
          </div>
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
            className='menu-tray-button'
            // onClick={}
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
      </div>
    )
  }
}

export default BoardShowBar;