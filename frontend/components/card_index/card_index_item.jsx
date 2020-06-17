import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

const CardIndexItem = ({card, index, openModal}) => {
  if (!card) return null;

  const draggingClass = (snapshot) => {
    return snapshot.isDragging ? ("card-index-item dragged-card") : ("card-index-item")
  }

  let localDueDate = card.dueDate ? new Date(card.dueDate) : null
  let localNow = new Date()
  let months = { 0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun",
    6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec", }
  

  let overdue, notSoon, dueDateIcon;

  if (localDueDate) {
    const month = months[localDueDate.getMonth()]
    const day = localDueDate.getDate()
    let year = localDueDate.getFullYear()
    const thisYear = localNow.getFullYear()
    year = year !== thisYear ? `, ${year}` : null

    if (localDueDate - localNow < 0) {
      overdue = true;
      dueDateIcon = (
        <div id="due-date-icon" className="due-date-icon overdue">
          <span className="material-icons">alarm</span>
          <div>{month} {day}{year}</div>
        </div>
      )
    } else if (localDueDate - localNow > 86400000) {
      notSoon = true;
      dueDateIcon = (
        <div id="due-date-icon" className="due-date-icon">
          <span className="material-icons">alarm</span>
          <div>{month} {day}{year}</div>
        </div>
      )
    } else {
      dueDateIcon = (
        <div id="due-date-icon" className="due-date-icon due-soon">
          <span className="material-icons">alarm</span>
          <div>{month} {day}{year}</div>
        </div>
      )
    }

  }

  // const setTimers = () => {
  //   if (this.timeout1) clearTimeout(this.timeout1)
  //   if (this.timeout2) clearTimeout(this.timeout2)
  //   if (!this.props.dueDate) return;

  //   this.now = new Date()

  //   let overdue = this.state.date - this.now < 0
  //   let notSoon = this.state.date - this.now > 86400000;

  //   if (notSoon) {
  //     this.setState({ dueSoon: false, overdue: false })
  //     this.timeout1 = setTimeout(() => {
  //       this.setState({ dueSoon: true, overdue: false })
  //     }, this.state.date - this.now - 86400000)
  //     this.timeout2 = setTimeout(() => {
  //       this.setState({ dueSoon: false, overdue: true })
  //     }, this.state.date - this.now)
  //   }

  //   if (!overdue && !notSoon) {
  //     this.setState({ dueSoon: true, overdue: false })
  //     this.timeout1 = setTimeout(() => {
  //       this.setState({ dueSoon: false, overdue: true })
  //     }, this.state.date - this.now)
  //   }

  //   if (overdue) {
  //     this.setState({ dueSoon: false, overdue: true })
  //   }
  // }

  

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