import React from "react";
import DueDateDropdownContainer from "./due_date_dropdown_container";

const CardActions = ({card, deleteCard, closeModal, openDropdown, dueDate}) => {
  const ddText = card.dueDate ? "Edit Due Date" : "Add Due Date";

  const titleFocus = () => {
    document.getElementById("card-show-title-edit").select()
  }

  const descriptionFocus = () => {
    document.getElementById("card-show-description-edit").select()
  }

  const commentFocus = () => {
    document.getElementById("new-comment").select()
  }

  return(
    <div id="card-show-actions">
      <div>
        CARD ACTIONS
      </div>
      <ul>
        <button
          className="card-action"
          onClick={titleFocus}
        >
          <div className="menu-btn">
            <span className="material-icons card-action-span">
              video_label
            </span>
            <div className="btntxt">
              Edit Title
            </div>
          </div>
        </button>
        <button
          className="card-action"
          onClick={descriptionFocus}
        >
          <div className="menu-btn">
            <span className="material-icons card-action-span">
              notes
            </span>
            <div className="btntxt">
              Edit Description
            </div>
          </div>
        </button>
        <button
          id="due-date-action"
          className="card-action"
          onClick={() => openDropdown("due-date-right")}
        >
          <div className="menu-btn">
            <span className="material-icons card-action-span">
              alarm
            </span>
            <div className="btntxt">
              {ddText}
            </div>
          </div>
          <DueDateDropdownContainer
            dropdownId="due-date-right"
            card={card}
          />
        </button>
        <button
          className="card-action"
          onClick={commentFocus}
        >
          <div className="menu-btn">
            <span className="material-icons card-action-span">
              chat_bubble_outline
            </span>
            <div className="btntxt">
              Write Comment
            </div>
          </div>
        </button>
        <button
          className="card-action"
          onClick={() => {deleteCard(card.id); closeModal()}}
        >
          <div id="delete-action" className="menu-btn">
            <span className="material-icons card-action-span">
              delete_forever
            </span>
            <div className="btntxt">
              Delete Card
            </div>
          </div>
        </button>
      </ul>
    </div>
  )
}

export default CardActions;