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
    `Are you sure you want to permanently delete the "${entity.title}" board?
    This will also delete all associated lists and cards.`
  ) : type === "list" ? (
    `Are you sure you want to permanently delete the "${entity.title}" list?
    This will also delete all associated cards.`
  ) : type === "card" ? (
    `Are you sure you want to permanently delete the "${entity.title}" card?`
  ) : null;

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