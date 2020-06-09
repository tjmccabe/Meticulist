import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import CardIndexItemContainer from './card_index_item_container';

class CardIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newCardTitle: ""
    }

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ newCardTitle: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const {newCardTitle} = this.state;
    const {createCard, toggleAddingCard, listId} = this.props

    if (newCardTitle.length > 0) {
      createCard({title: newCardTitle, list_id: listId })
      this.setState({ newCardTitle: "" })
      toggleAddingCard()
    }
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    } else if (e.keyCode === 27) {
      this.props.toggleAddingCard()
    }
  }

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

  render() {
    const { listId, addingCard, toggleAddingCard } = this.props;

    const cardForm = addingCard ? (
      <div
        className="new-card-form-container"
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
            onBlur={(e) => this.handleSubmit(e)}
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
            onClick={toggleAddingCard}
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