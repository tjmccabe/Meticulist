import React from 'react';
import BoardShowBar from './board_show_bar';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.currentBoardId)
    }

    render() {
        const {board, currentBoardId} = this.props;

        return board ? (
            <div id="outer-board-show">
                <div
                    className="board-background"
                    style={{'backgroundImage': `url("${board.bgpBigUrl}")`}}
                >
                </div>
                <BoardShowBar
                    board={board}
                    currentBoardId={currentBoardId}
                />
                
            </div>
        ) : null
    }
}

export default BoardShow;