import React from 'react';
import BoardShowBar from './board_show_bar';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        // this.currBoard = this.props.board.id
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.currentBoardId)
    }

    // componentDidUpdate() {
    //     if (this.currBoard !== this.props.board.id) {
    //         this.setState({ titleInput: this.props.board.title })
    //         this.currBoard = this.props.board.id
    //     }
    // }

    render() {
        const {board, currentBoardId, openModal, updateBoard} = this.props;

        return board ? (
            <div id="outer-board-show">
                <div
                    className="board-big-background"
                    style={{'backgroundImage': `url("${board.bgpBigUrl}")`}}
                >
                </div>
                <BoardShowBar
                    board={board}
                    currentBoardId={currentBoardId}
                    updateBoard={updateBoard}
                    openModal={openModal}
                />
                
            </div>
        ) : null
    }
}

export default BoardShow;