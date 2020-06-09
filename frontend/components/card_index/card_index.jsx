import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import CardIndexItemContainer from './card_index_item_container';

class CardIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newCardTitle: ""
    }

    this.shouldScroll = false;

    this.listener = this.listener.bind(this)
    this.autoExpand = this.autoExpand.bind(this)
    this.scroll = this.scroll.bind(this)
  }
  
  scroll() {
    let cardIndex = document.getElementById(`outer-card-index-${this.props.listId}`)
    cardIndex.scrollTop = cardIndex.scrollHeight;
  }

  componentDidUpdate(prevProps) {
    if (this.props.addingCard && !prevProps.addingCard) {
      document.addEventListener("click", this.listener)
      this.autoExpand()
    } else if (!this.props.addingCard && prevProps.addingCard) {
      document.removeEventListener("click", this.listener)
    }

    if (prevProps.cardOrder.length < this.props.cardOrder.length) {
      if (this.shouldScroll) this.scroll();
      this.shouldScroll = false;
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.listener)
  }

  listener(e) {
    let outerForm = document.getElementById(`new-card-form-${this.props.listId}`)
    if (!outerForm.contains(e.target)) this.props.stopAddingCard();
  }

  handleChange(e) {
    this.setState({ newCardTitle: e.target.value }, () => {
      this.autoExpand()
      this.scroll()
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const {newCardTitle} = this.state;
    const {createCard, stopAddingCard, listId} = this.props

    if (newCardTitle.length > 0) {
      createCard({ title: newCardTitle, list_id: listId })
      this.shouldScroll = true;
      this.setState({ newCardTitle: "" }, stopAddingCard)
    } else stopAddingCard();
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    } else if (e.keyCode === 27) {
      this.props.stopAddingCard()
    }
  }

  autoExpand() {
    let textArea = document.getElementById(`new-card-${this.props.listId}`)
    textArea.style.height = 0;
    const height = textArea.scrollHeight
    textArea.style.height = height > 60 ? height + "px" : "60px";
  };

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
    const { listId, addingCard, stopAddingCard } = this.props;

    const cardForm = addingCard ? (
      <div
        id={`new-card-form-${listId}`}
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
            id={`outer-card-index-${listId}`}
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