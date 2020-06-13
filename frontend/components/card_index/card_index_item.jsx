import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

const CardIndexItem = ({card, index, openModal}) => {
  if (!card) return null;

  const draggingClass = (snapshot) => {
    return snapshot.isDragging ? ("card-index-item dragged-card") : ("card-index-item")
  }

  const dueDateIcon = card.dueDate ? (
    <div>DD</div>
  ) : null;

  const descriptionIcon = card.description ? (
    <div>
      <span className="material-icons">notes</span>
    </div>
  ) : null;

  const commentIcon = card.commentIds && card.commentIds.length ? (
    <div>
      <span className="material-icons">
        chat_bubble_outline
      </span>
      <div>{card.commentIds.length}</div>
    </div>
  ) : null;

  const cardIcons = (dueDateIcon || descriptionIcon || commentIcon) ? (
    <div className="card-icons">
      {dueDateIcon}
      {descriptionIcon}
      {commentIcon}
    </div>
  ) : null;

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
          <div className="card-index-item-inner" >
            <div className="card-title">{card.title}</div>
            {cardIcons}
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default CardIndexItem;