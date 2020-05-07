import React from 'react';
import BoardShowBar from './board_show_bar';
import ListIndexContainer from '../list_index/list_index_container';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.currentBoardId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentBoardId !== this.props.currentBoardId) {
            this.props.fetchBoard(this.props.currentBoardId)
        }
    }

    render() {
        const {board, currentBoardId, openModal, updateBoard, openTray} = this.props;

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
                    openTray={openTray}
                />
                <ListIndexContainer/>
            </div>
        ) : null
    }
}

export default BoardShow;