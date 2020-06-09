import React from "react";

const NewCardPlaceholder = ({ addingCard, startAddingCard }) => {
  return addingCard ? (
    null
  ) : (
    <div className="add-a-card"
        onClick={startAddingCard}
    >
      <span className="material-icons">
        add
      </span>
      <div>Add a card</div>
    </div>
  )
}

export default NewCardPlaceholder