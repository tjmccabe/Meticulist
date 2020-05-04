import React from 'react';
import {Link} from 'react-router-dom';

const BoardIndexItem = ({board}) => {
    const bglink = board.bgpBigUrl ? (
        `url("${board.bgpSmallUrl}")`
        ) : ('#7e5a9b');
    const bgtype = board.bgpBigUrl ? 'backgroundImage' : 'backgroundColor'
    const alt = board.bgpBigUrl ? `alt: ${board.bgpAltText}` : null


    return(
        <li
            className="board-tile"
            style={{[bgtype]: bglink, alt}}
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