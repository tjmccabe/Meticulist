import React from 'react';
import BoardIndexItem from './board_index_item';
import BoardFormTile from './board_form';
import {Link} from 'react-router-dom';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBoards()
  }

  render() {
    const {personalBoards, sharedBoards, currentUser} = this.props;

    const PersonalBoardsEle = (
      <div className="boards-outer">
        <div className="boards-header">
          <span className="material-icons">person_outline</span>
          <h3>Personal Boards</h3>
        </div>
        <ul className="boards-list">
          {personalBoards.map((board, index) => (
            <BoardIndexItem board={board} key={index} />
          ))}
          <BoardFormTile />
        </ul>
      </div>
    )

    const SharedBoardsEle = sharedBoards[0] ? (
      <div className="boards-outer">
        <div className="boards-header">
          <span className="material-icons">people_outline</span>
          <h3>Shared With Me</h3>
        </div>
        <ul className="boards-list">
          {sharedBoards.map((board, index) => (
            <BoardIndexItem board={board} key={index} />
          ))}
        </ul>
      </div>
    ) : null

    return(
      <div className="boards-container">
        <Link to='/boards' className="boards-title">
          <span className="material-icons">dashboard</span>
          <h2>Your Boards</h2>
        </Link>
        <div className="board-index">
          {PersonalBoardsEle}
          {SharedBoardsEle}
          {/* How do modals work here? */}
        </div>
      </div>
    )
  }
}

export default BoardIndex;