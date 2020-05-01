import React from 'react';
import {Link} from 'react-router-dom'

class BoardFormTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="board-tile">
                <Link to='/'>
                    {/* Do I need a link here? maybe just onclick for a modal? */}
                    <div className="board-title">
                        Create new board
                    </div>
                </Link>
            </li>
        )
    }
}

export default BoardFormTile;