import React from "react";

const NewCardPlaceholder = ({ addingCard, toggleAddingCard }) => {
  return addingCard ? (
    null
  ) : (
    <div className="add-a-card"
        onClick={toggleAddingCard}
    >
      <span className="material-icons">
        add
      </span>
      <div>Add a card</div>
    </div>
  )
}

export default NewCardPlaceholder