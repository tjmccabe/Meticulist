import React from "react";

const CardActions = ({card, deleteCard, updateCard, closeModal}) => {
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
            <span className="material-icons">
              label
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
            <span className="material-icons">
              subject
            </span>
            <div className="btntxt">
              Edit Description
            </div>
          </div>
        </button>
        <button
          className="card-action"
          onClick={() => { }}
        >
          <div className="menu-btn">
            <span className="material-icons">
              alarm
            </span>
            <div className="btntxt">
              {ddText}
            </div>
          </div>
        </button>
        <button
          className="card-action"
          onClick={commentFocus}
        >
          <div className="menu-btn">
            <span className="material-icons">
              chat
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
          <div className="menu-btn">
            <span className="material-icons">
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