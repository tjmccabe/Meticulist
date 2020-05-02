import React from 'react';
import {Link} from 'react-router-dom';

const BoardIndexItem = ({board}) => {
    // debugger
    const bglink = board.backgroundPhotoUrl ? `url(${board.backgroundPhotoUrl})` : '#7e5a9b';
    const bgtype = board.backgroundPhotoUrl ? 'backgroundImage' : 'backgroundColor'

    return(
        <li
            className="board-tile"
            style={{[bgtype]: bglink}}
        >
            <Link to={`/boards/${board.id}`} className="must-grow">
                <div className="board-title">
                    {board.title}
                </div>
            </Link>
        </li>
    )
}

export default BoardIndexItem