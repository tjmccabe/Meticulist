import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

const CardIndexItem = ({card, index, openModal}) => {
  if (!card) return null;

  const draggingClass = (snapshot) => {
    return snapshot.isDragging ? ("card-index-item dragged-card") : ("card-index-item")
  }

  return (
    <Draggable
      draggableId={`card-${card.id}`}
      index={index}
      type="CARD"
      >
      {(provided, snapshot) => (
        <div
          className={draggingClass(snapshot)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => openModal("cardShow", card.id)}
        >
          <div className="card-title" >
            {card.title}
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default CardIndexItem;