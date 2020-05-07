import React from 'react';
import { } from 'react-beautiful-dnd';
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
        key={cardIndex}
      />
    ))
  }

  render() {

    return (
      <div className="outer-card-index">
        {this.makeCards()}
      </div>
    )
  }
}

export default CardIndex;