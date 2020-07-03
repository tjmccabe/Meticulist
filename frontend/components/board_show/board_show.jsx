import React from 'react';
import BoardShowBar from './board_show_bar';
import ListIndexContainer from '../list_index/list_index_container';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imageLoaded: "unloaded"
        };

        this.handleImageLoaded = this.handleImageLoaded.bind(this)
        this.handleImageError = this.handleImageError.bind(this)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.currentBoardId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentBoardId !== this.props.currentBoardId) {
            this.setState({ imageLoaded: "unloaded" });
            this.props.fetchBoard(this.props.currentBoardId)
        }
    }

    handleImageLoaded() {
        // setTimeout(() => {
            this.setState({ imageLoaded: "loaded" });
        // }, 3000)
    }

    handleImageError() {
        this.setState({ imageLoaded: "error" });
    }

    render() {
        const {board, currentBoardId, openModal, updateBoard, openTray, trayActive} = this.props;
        if (!board) return null;

        const {imageLoaded} = this.state;

        const loadingSpinner = !board.bgpBigUrl ? null : imageLoaded === "unloaded" ? (
            <div
                className="board-big-spinner"
                style={{ 'backgroundImage': `url("${board.bgpSmallUrl}")` }}
            >
                <div id="transparent-overlay">
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div id="loading-image-text">Optimizing background image...</div>
                </div>
            </div>
        ) : imageLoaded === "error" ? (
            <div
                className="board-big-spinner"
            >
                <div id="transparent-overlay">
                    <div id="board-image-error">
                        Could not load background image at this time. If this issue
                        persists, Unsplash may have removed your image from their collection.
                        Consider editing this board to use a different background image.
                    </div>
                </div>
            </div>
        ) : null;

        const phantomImage = board.bgpBigUrl ? (
            <img
                id="phantom-image"
                src={board.bgpBigUrl}
                onLoad={this.handleImageLoaded}
                onError={this.handleImageError}
            />
        ) : null;

        return (
            <div id="outer-board-show">
                <div
                    className="board-big-background"
                    style={{'backgroundImage': `url("${board.bgpBigUrl}")`}}
                >
                </div>
                {phantomImage}
                {loadingSpinner}
                <BoardShowBar
                    board={board}
                    currentBoardId={currentBoardId}
                    updateBoard={updateBoard}
                    openModal={openModal}
                    openTray={openTray}
                    trayActive={trayActive}
                />
                <ListIndexContainer/>
            </div>
        )
    }
}

export default BoardShow;