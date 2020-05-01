import React from 'react';
import {Link} from 'react-router-dom';

const BoardIndexItem = ({board}) => {
    return(
        <li className="board-tile">
            <Link to={`/boards/${board.id}`}>
                <div className="board-title">
                    {board.title}
                </div>
            </Link>
        </li>
    )
}

export default BoardIndexItem