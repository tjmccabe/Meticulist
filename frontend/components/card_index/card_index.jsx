import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import CardIndexItemContainer from './card_index_item_container';

class CardIndex extends React.Component {
  constructor(props) {
    super(props)
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
    const {listId} = this.props
    // debugger

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
          </div>
        )}
      </Droppable>
    )
  }
}

export default CardIndex;