import React from 'react';
import CardIndexContainer from '../card_index/card_index_container';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {list, cards} = this.props
    return(
      <div className="list-index-item">
        <div className="list-header">
          {list.id}
          {list.title}
        </div>
        <CardIndexContainer
          cardOrder={list.cardOrder}
        />
        {/* {some new card form} */}
      </div>
    )
  }
}

export default ListIndexItem;