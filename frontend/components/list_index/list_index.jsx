import React from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import ListIndexItemContainer from './list_index_item_container';
import ListFormContainer from './list_form_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listOrder: this.props.listOrder,
      cardOrders: this.props.cardOrders
    }

    this.onDragEnd = this.onDragEnd.bind(this)
    this.onDragStart = this.onDragStart.bind(this)
    this.orderingError = this.orderingError.bind(this)
  }

  componentDidUpdate(prevProps) {
    const {listOrder, cardOrders, trayActive} = this.props;
    const outerIndex = document.getElementById("outer-list-index")

    if (trayActive && !prevProps.trayActive) {
      setTimeout(() => outerIndex.classList.add("tray-active"), 100)
    } else if (!trayActive && prevProps.trayActive) {
      outerIndex.classList.remove("tray-active")
    }

    if (this.orderingError()) return;

    if (this.props.boardId !== prevProps.boardId) {
      this.props.fetchBoard(this.props.boardId)
        .then(this.setState({
          listOrder: listOrder,
          cardOrders: cardOrders
        }))
    };

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

  orderingError() {
    const { listOrder, cardOrders, reorderLists, reorderCards, boardId } = this.props;
    if (!listOrder || !cardOrders) return false;

    let incorrect = false;
    let lists = new Set();
    let newLO = [];

    for (let i = 0; i < listOrder.length; i++) {
      if (lists.has(listOrder[i])) {
        incorrect = true;
      } else {
        newLO.push(listOrder[i])
      }
      lists.add(listOrder[i])
    }

    if (incorrect) {
      reorderLists(newLO, boardId);
      return true;
    }

    let cards = new Set();
    let newCOs = [];

    for (let i = 0; i < cardOrders.length; i++) {
      let cO = cardOrders[i];
      let newCO = [];
      let needsUpdate = false;

      for (let j = 0; j < cO.length; j++) {
        if (cards.has(cO[j])) {
          incorrect = true;
          needsUpdate = true
        } else {
          newLO.push(cO[j])
        }
        cards.add(cO[j])
      }

      if (needsUpdate) newCOs.push([newCO, listOrder[i]]);
    }

    if (incorrect) {
      newCOs.forEach(newCO => {
        reorderCards(newCO[0], newCO[1])
      })
      return true;
    }

    return false;
  }

  onDragStart(start) {
    $(".outer-card-index").addClass("no-vert-scroll")
    // tilt the dragged item
  }

  onDragUpdate(update) {
    // add shading to the active placeholder
  }

  onDragEnd(result) {
    $(".outer-card-index").removeClass("no-vert-scroll")
    const {draggableId, source, destination, type} = result
    const {listOrder, cardOrders} = this.state
    const {reorderLists, reorderCards, reorderTwoLists, updateCard, boardId} = this.props

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

        updateCard({ id: movingCardId, list_id: endListId})
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

    return(
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
      >
        <Droppable
          droppableId="list-index"
          direction="horizontal"
          type="LIST"
        >
          {(provided) => (
            <div 
              id="outer-list-index"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.makeLists()}
              {provided.placeholder}
              <ListFormContainer boardId={this.props.boardId}/>
              <div className="phantom"></div>
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