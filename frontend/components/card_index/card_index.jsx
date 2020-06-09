import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import CardIndexItemContainer from './card_index_item_container';

class CardIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newCardTitle: ""
    }

    this.listenerFunction = this.listenerFunction.bind(this)
  }

  handleChange(e) {
    this.setState({ newCardTitle: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const {newCardTitle} = this.state;
    const {createCard, stopAddingCard, listId} = this.props

    if (newCardTitle.length > 0) {
      createCard({ title: newCardTitle, list_id: listId })
      this.setState({ newCardTitle: "" }, stopAddingCard())
    }
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    } else if (e.keyCode === 27) {
      e.stopPropagation()
      this.props.stopAddingCard()
    }
  }

  // startAdding() {
  //   let textArea = document.getElementById(`edit-title-${this.props.listId}`)
  //   let displayTitle = document.getElementById(`display-title-${this.props.listId}`)
  //   displayTitle.parentElement.classList.add("no-display")
  //   textArea.parentElement.parentElement.classList.remove("no-display")
  //   this.autoExpand()
  //   textArea.select()
  // }

  // stopAdding() {
  //   let textArea = document.getElementById(`new-card-${this.props.listId}`)
  //   let displayTitle = document.getElementById(`display-title-${this.props.listId}`)
  //   textArea.parentElement.parentElement.classList.add("no-display")
  //   displayTitle.parentElement.classList.remove("no-display")
  // }

  makeCards() {
    const { cards } = this.props;
    return this.props.cardOrder.map((cardId, cardIndex) => (
      <CardIndexItemContainer
        card={cards[cardId]}
        key={cardId}
        index={cardIndex}
      />
    ))
  }

  listenerFunction() {
    if (this.addingListener) document.removeEventListener("click", this.props.stopAddingCard)
    this.addingListener = this.props.addingCard ? (
      document.addEventListener("click", this.props.stopAddingCard)
    ) : null
  }

  render() {
    const { listId, addingCard, stopAddingCard } = this.props;

    // this.listenerFunction()

    const cardForm = addingCard ? (
      <div
        className="new-card-form-container"
        onClick={(e) => e.stopPropagation()}
        onBlur={stopAddingCard}
      >
        <form
          className="new-card-form"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <textarea
            id={`new-card-${listId}`}
            className="new-card-title-edit"
            onChange={(e) => this.handleChange(e)}
            value={this.state.newCardTitle}
            // onBlur={stopAddingCard}
            onKeyDown={(e) => this.keyPress(e)}
            placeholder="Enter a title for this card..."
            spellCheck="false"
          />
        </form>
        <div className="add-card-buttons">
          <button
            className="add-card-button"
            onClick={(e) => this.handleSubmit(e)}
          >
            Add Card
          </button>
          <button
            className="stop-adding image"
            onClick={stopAddingCard}
            type="button"
          >
            <span className="material-icons">
              clear
            </span>
          </button>
        </div>
      </div>
    ) : null;

    return (
      <Droppable
        droppableId={`inner-list-${listId}`}
        type="CARD"
      >
        {(provided) => (
          <div
            className="outer-card-index"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.makeCards()}
            {provided.placeholder}
            {cardForm}
          </div>
        )}
      </Droppable>
    )
  }
}

export default CardIndex;