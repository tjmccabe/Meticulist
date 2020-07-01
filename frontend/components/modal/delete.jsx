import React from 'react';

const Delete = ({
    type,
    id,
    entity,
    closeModal,
    deleteBoard,
    deleteList,
    deleteCard,
    history
  }) => {
  
  const deleteText = type === "board" ? (
    `Are you sure you want to permanently delete this board?`
  ) : type === "list" ? (
    `Are you sure you want to permanently delete this list?`
  ) : type === "card" ? (
    `Are you sure you want to permanently delete this card?`
  ) : null;

  const altText = type === "board" ? (
    `This will also delete all associated lists and cards.`
  ) : type === "list" ? (
    `This will also delete all associated cards.`
  ) : null

  const alt = altText ? (
    <div id="side-effects">
      {altText}
    </div>
  ) : null

  const deleteNow = () => {
    type === "board" ? (
      deleteBoard(id)
        .then(() => history.push(`/boards/`))
    ) : type === "list" ? (
      deleteList(id)
    ) : type === "card" ? (
      deleteCard(id)
    ) : null;
  }

  const titleCase = type[0].toUpperCase() + type.substring(1)

  return (
    <div id="delete-container">
      <span className="material-icons close-modal" onClick={closeModal}>
        clear
      </span>
      <div id="are-you-sure">
        {deleteText}
      </div>
      {alt}
      <button
        id="delete-button"
        onClick={() => {closeModal(); deleteNow()}}
      >
        Yes, Delete {titleCase}
      </button>
    </div>
  )
}

export default Delete;