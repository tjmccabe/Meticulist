import React from 'react';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h2>You're logged in as {this.props.currentUser.username}!</h2>
                <br/>
                <button onClick={this.props.logout}>Log out</button>
            </div>
        )
    }
}

export default BoardIndex;