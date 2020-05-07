import React from 'react';

const CardIndexItem = ({card}) => {

  return (
    <div className="card-index-item">
      <div className="card-header">
        {card.id}
        {card.title}
      </div>
    </div>
  )
}

export default CardIndexItem;