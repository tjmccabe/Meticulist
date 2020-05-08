import React from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import ListIndexItemContainer from './list_index_item_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listOrder: this.props.listOrder,
      cardOrders: this.props.cardOrders
    }

    this.onDragEnd = this.onDragEnd.bind(this)
  }

  componentDidUpdate(prevProps) {
    const {listOrder, cardOrders} = this.props;

    if (this.props.boardId !== prevProps.boardId) {
      this.props.fetchBoard(this.props.boardId)
        .then(this.setState({
          listOrder: listOrder,
          cardOrders: cardOrders
        }))
    };
    // debugger
    if (prevProps.listOrder !== this.props.listOrder) {
      this.setState({
        listOrder: listOrder,
        cardOrders: cardOrders
      })
    }
    
    if (!prevProps.cardOrders || !cardOrders) return;
    for (let i = 0; i < Object.values(prevProps.cardOrders).length; i++) {
      if (Object.values(cardOrders)[i] !==
        Object.values(prevProps.cardOrders)[i]
      ) {
        let h = {}
        Object.keys(cardOrders).forEach(listId => { h[parseInt(listId)] = cardOrders[listId]})
        this.setState({
          listOrder: listOrder,
          cardOrders: h
        })
      }
    }
  }

  onDragStart(start) {
    // tilt the dragging list or card (but I think we're already using snapshot)
  }

  onDragUpdate(update) {
    // add shading to the active placeholder
  }

  onDragEnd(result) {
    const {draggableId, source, destination, type} = result
    const {listOrder, cardOrders} = this.state
    const {reorderLists, reorderCards, reorderTwoLists, boardId} = this.props

    if (!destination) return;

    if (type === "LIST") {
      // untilt the dragging list
      // maybe remove shading from placeholder? depends how update works

      if (destination.index === source.index) return;

      const newListOrder = [...listOrder];
      const movingListId = newListOrder.splice(source.index, 1)
      newListOrder.splice(destination.index, 0, movingListId[0])

      reorderLists(newListOrder, boardId)
    } else if (type === "CARD") {
      // untilt the dragging card
      // maybe remove shading from placeholder? depends how update works

      if (
        destination.index === source.index &&
        destination.droppableId === source.droppableId
      ) return

      if (destination.droppableId === source.droppableId) {
        const listId = parseInt(source.droppableId.split('-')[2])

        const newCardOrder = [...cardOrders[listId]]
        const movingCardId = newCardOrder.splice(source.index, 1)
        newCardOrder.splice(destination.index, 0, movingCardId[0])

        reorderCards(newCardOrder, listId)
      } else {
        const startListId = parseInt(source.droppableId.split('-')[2])
        const endListId = parseInt(destination.droppableId.split('-')[2])

        const startCardOrder = [...cardOrders[startListId]]
        const endCardOrder = [...cardOrders[endListId]]

        const movingCardId = startCardOrder.splice(source.index, 1)
        endCardOrder.splice(destination.index, 0, movingCardId[0])

        reorderTwoLists(
          startCardOrder,
          startListId,
          endCardOrder,
          endListId
        )
      }
    }
  }

  makeLists() {
    const {lists} = this.props;
    return (
      this.state.listOrder.map((listId, listIndex) => (
        <ListIndexItemContainer
          list={lists[listId]}
          key={listId}
          index={listIndex}
        />
      ))
    )
  }

  render() {
    if (!this.props.lists || !this.state.listOrder) return null;

    const outerClass = this.props.trayActive ? (
      "outer-list-index tray-active"
    ) : "outer-list-index";

    return(
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <Droppable
          droppableId="list-index"
          direction="horizontal"
          type="LIST"
        >
          {(provided) => (
            <div 
              className={outerClass}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.makeLists()}
              <div className="phantom"></div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default ListIndex;

const exResult = {
  draggableId: 'list-1',
  type: 'LIST',
  reason: 'DROP',  // or 'CANCEL'
  source: {
    droppableId: 'list-index',
    index: 0
  },
  destination: {
    droppableId: 'list-index',
    index: 2
  }
}

const exStart = {
  draggableId: 'list-1',
  type: 'LIST',
  source: {
    droppableId: 'list-index',
    index: 0
  }
}
// update also has destination

const exDraggableSnapshot = {
  isDragging: true,
  draggingOver: 'list-index'
}

const exDroppableSnapshot = {
  isDraggingOver: true,
  draggingOverWith: 'list-1'
}


// example state:
// state = {
//   listOrder: [96, 47, 72],
//   cardOrders: {
//     47: [1,7,4,9],
//     72: [2],
//     96: [8,3,10]
//   }
// }