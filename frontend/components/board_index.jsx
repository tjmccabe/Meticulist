import React from 'react';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="board-index">
                <h2>You're logged in as {this.props.currentUser.username}!</h2>
            </div>
        )
    }
}

export default BoardIndex;