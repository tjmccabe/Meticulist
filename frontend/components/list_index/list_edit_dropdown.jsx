import React from 'react';

const ListEditDropdown = ({ closeDropdowns,
                            currentDropdown,
                            listId,
                            openModal,
                            startAddingCard,
                            startEditing }) => {

  const classes = (currentDropdown === `list-${listId}`) ?
    "list-dropdown dropdown-content shown"
    : "list-dropdown dropdown-content"
  
  return(
    <div
      id={`list-dropdown-${listId}`}
      className={classes}
    >
      <div className="dropdown-header">
        <span>
          List Actions
        </span>
        <span className="material-icons close-dd" onClick={closeDropdowns}>
          clear
        </span>
      </div>
      <hr />
      <div className="dropdown-options">
        <li onClick={() => {startAddingCard(); closeDropdowns()}}>Add Card...</li>
        <li onClick={() => {startEditing(); closeDropdowns()}}>Edit List Name...</li>
        <hr />
        <li
          className="delete-list"
          onClick={() => { closeDropdowns(); openModal("delete", ["list", listId])}}
        >
          Delete List
        </li>
      </div>
    </div>
  )
}

export default ListEditDropdown