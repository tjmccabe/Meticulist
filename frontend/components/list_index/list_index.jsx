import React from 'react';
import {} from 'react-beautiful-dnd';
import ListIndexItemContainer from './list_index_item_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listOrder: this.props.listOrder,
      cardOrders: this.props.cardOrders
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.boardId !== prevProps.boardId) {
      // maybe save changes here?
      this.props.fetchBoard(this.props.boardId)
        .then(this.setState({
          listOrder: this.props.listOrder,
          cardOrders: this.props.cardOrders
        }))
    };
    if ((prevProps.cardOrders !== this.props.cardOrders) || (prevProps.listOrder !== this.props.listOrder)) {
      this.setState({
        listOrder: this.props.listOrder,
        cardOrders: this.props.cardOrders
      })
    }
  }

    componentDidMount() {
      // this.props.fetchBoard(this.props.boardId)
      //   .then(this.setState({
      //     listOrder: this.props.listOrder,
      //     cardOrders: this.props.cardOrders
      //   }))
    }

  makeLists() {
    const {lists} = this.props;
    return this.state.listOrder.map((listId, listIndex) => (
      <ListIndexItemContainer
        list={lists[listId]}
        key={listIndex}
      />
    ))
  }

  render() {
    if (!this.state.listOrder) return null;

    return(
      <div className="outer-list-index">
        {this.makeLists()}
      </div>
    )
  }
}

export default ListIndex;




// example state:
// state = {
//   listOrder: [96, 47, 72],
//   cardOrders: {
//     47: [1,7,4,9],
//     72: [2],
//     96: [8,3,10]
//   }
// }