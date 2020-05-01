import React from 'react';
import BoardIndexItem from './board_index_item';
import BoardForm from './board_form';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBoards()
  }

  render() {
    const {boards} = this.props;

    return(
      <div className="board-index">
        <ul>
          {
            boards.map((board, index) => (
              <BoardIndexItem board={board} key={index}/>
            ))
          }
        </ul>
        <BoardForm />
      </div>
    )
  }
}

export default BoardIndex;