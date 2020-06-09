import React from 'react';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import CardIndexContainer from '../card_index/card_index_container';
import NewCardPlaceholder from './new_card_placeholder';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: this.props.title,
      addingCard: false
    }

    this.startEditing = this.startEditing.bind(this)
    this.stopEditing = this.stopEditing.bind(this)
    this.autoExpand = this.autoExpand.bind(this)
    this.startAddingCard = this.startAddingCard.bind(this)
    this.stopAddingCard = this.stopAddingCard.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps && this.props.title !== prevProps.title) {
      this.setState({ titleInput: this.props.title })
    }
  }

  handleChange(e) {
    this.setState({ titleInput: e.target.value }, this.autoExpand)
  }

  retitle(e) {
    e.preventDefault()
    if (this.state.titleInput.length > 0 && this.state.titleInput !== this.props.title) {
      let newList = Object.assign(this.props.list, { title: this.state.titleInput })
      this.props.updateList(newList)
      this.setState({ titleInput: newList }, this.stopEditing)
    } else {
      this.setState({ titleInput: this.props.title }, this.stopEditing)
    }
  }

  startEditing() {
    let textArea = document.getElementById(`edit-title-${this.props.listId}`)
    let displayTitle = document.getElementById(`display-title-${this.props.listId}`)
    displayTitle.parentElement.classList.add("no-display")
    textArea.parentElement.parentElement.classList.remove("no-display")
    this.autoExpand()
    textArea.select()
  }
  
  stopEditing() {
    let textArea = document.getElementById(`edit-title-${this.props.listId}`)
    let displayTitle = document.getElementById(`display-title-${this.props.listId}`)
    textArea.parentElement.parentElement.classList.add("no-display")
    displayTitle.parentElement.classList.remove("no-display")
  }

  keyPress(e) {
    if (e.keyCode === 13 || e.keyCode === 27) {
      this.retitle(e);
    }
  }

  autoExpand() {
    let textArea = document.getElementById(`edit-title-${this.props.listId}`)
    textArea.style.height = 0;
    const height = textArea.scrollHeight + 4
    textArea.style.height = height + 'px';
  };

  stopAddingCard() {
    this.setState({addingCard: false})
  }

  startAddingCard() {
    this.setState({addingCard: true})
  }

  render() {
    const {list, index, listId} = this.props

    const draggingClass = (snapshot) => {
      return snapshot.isDragging ? ("list-index-item dragged-list") : ("list-index-item")
    }

    const editButton = (
      <button
        className="editing image"
        onClick={this.startEditing}
      >
        <span className="material-icons">
          edit
        </span>
      </button>
    )

    return(
      <Draggable
        draggableId={`outer-list-${listId}`}
        index={index}
        type="LIST"
        disableInteractiveElementBlocking
      >
        {(provided, snapshot) => (
          <div
            className={draggingClass(snapshot)}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              className="list-header-display"
              {...provided.dragHandleProps}
            >
              <div
                id={`display-title-${listId}`}
                className="list-index-item-title-display"
                onClick={this.startEditing}
              >
                {list.title}
              </div>
              {editButton}
            </div>
            <div
              className="list-header-edit no-display"
            >
              <form
                className="list-index-item-title-wrapper"
                onSubmit={(e) => this.retitle(e)}
              >
                <textarea
                  id={`edit-title-${listId}`}
                  className="list-index-item-title-edit"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.titleInput}
                  onBlur={(e) => this.retitle(e)}
                  onKeyDown={(e) => this.keyPress(e)}
                  spellCheck="false"
                />
              </form>
              {editButton}
            </div>
            <CardIndexContainer
              listId={listId}
              addingCard={this.state.addingCard}
              stopAddingCard={this.stopAddingCard}
            />
            <NewCardPlaceholder
              addingCard={this.state.addingCard}
              startAddingCard={this.startAddingCard}
            />
          </div>
        )}
      </Draggable>
    )
  }
}

export default ListIndexItem;