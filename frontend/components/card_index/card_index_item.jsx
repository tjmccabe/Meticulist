import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

const CardIndexItem = ({card, index, openModal}) => {
  if (!card) return null;

  const [timing, updateTiming] = React.useState("");
  const [timeout, updateTimeout] = React.useState(null);

  const draggingClass = (snapshot) => {
    return snapshot.isDragging ? ("card-index-item dragged-card") : ("card-index-item")
  }

  let localDueDate = card.dueDate ? new Date(card.dueDate) : null
  let localNow = new Date()
  let months = { 0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun",
    6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec", }
  
  let month, day, year, thisYear;

  if (localDueDate) {
    month = months[localDueDate.getMonth()]
    day = localDueDate.getDate()
    year = localDueDate.getFullYear()
    thisYear = localNow.getFullYear()
    year = year !== thisYear ? `, ${year}` : null

    if ((localDueDate - localNow) / 10000 < 0) {
      if (timing !== "overdue") updateTiming("overdue")
    } else if ((localDueDate - localNow) / 100000 > 864) {
      if (timing !== "okay") updateTiming("okay")
      if ((localDueDate - localNow)/100000 < 1864) {
        setTimeout(() => {
          updateTiming("dueSoon")
        }, localDueDate - localNow - 86400000)
      }
    } else {
      if (timing !== "dueSoon") updateTiming("dueSoon")
      setTimeout(() => {
        updateTiming("overdue")
      }, localDueDate - localNow)
    }
  } else if (timing !== "") updateTiming("")

  const dueDateIcon = timing === "overdue" ? (
    <div id="due-date-icon" className="due-date-icon overdue">
      <span className="material-icons">alarm</span>
      <div>{month} {day}{year}</div>
    </div>
  ) : timing === "dueSoon" ? (
    <div id="due-date-icon" className="due-date-icon due-soon">
      <span className="material-icons">alarm</span>
      <div>{month} {day}{year}</div>
    </div>
  ) : timing === "okay" ? (
      <div id="due-date-icon" className="due-date-icon">
        <span className="material-icons">alarm</span>
        <div>{month} {day}{year}</div>
      </div>
  ) : null;  

  const descriptionIcon = card.description ? (
    <div className="description-icon">
      <span className="material-icons">notes</span>
    </div>
  ) : null;

  const commentIcon = card.commentIds && card.commentIds.length ? (
    <div className="comment-icon">
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