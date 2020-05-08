import React from 'react';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import CardIndexContainer from '../card_index/card_index_container';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: this.props.list.title
    }

    this.retitle = this.retitle.bind(this)
    this.setHeight = this.setHeight.bind(this)
  }

  componentDidMount() {
    this.setHeight(document.getElementById(`list-title-${this.props.list.id}`))
  }

  componentDidUpdate(prevProps) {
    if (prevProps && this.props.title !== prevProps.title) {
      this.setState({ titleInput: this.props.title })
    }
    this.setHeight(document.getElementById(`list-title-${this.props.list.id}`))
  }

  handleChange() {
    return e => {
      this.setState({ titleInput: e.target.value })
      this.setHeight(e.target);
    }
  }

  retitle(e) {
    e.preventDefault()
    if (this.state.titleInput.length > 0 && this.state.titleInput !== this.props.title) {
      let newList = Object.assign(this.props.list, { title: this.state.titleInput })
      this.props.updateList(newList)
    } else {
      this.setState({ titleInput: this.props.title })
    }
    const title = document.getElementById(`list-title-${this.props.list.id}`)
    title.blur()
  }

  focusUp() {
    return document.getElementById(`list-title-${this.props.list.id}`)
  }

  keyPress(e) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      return e.target.blur();
    }
  }

  setHeight(el) {
    el.style.height = "1px";
    el.style.height = el.scrollHeight + 'px';
  }

  render() {
    const {list, index} = this.props

    const draggingClass = (snapshot) => {
      return snapshot.isDragging ? ("list-index-item dragged-list") : ("list-index-item")
    }

    return(
      <Draggable
        draggableId={`outer-list-${list.id}`}
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
              className="list-header"
              {...provided.dragHandleProps}
            >
              <form
                className="list-index-item-title-wrapper"
                onSubmit={(e) => this.retitle(e)}
              >
                <textarea
                  id={`list-title-${list.id}`}
                  className="list-index-item-title"
                  onChange={this.handleChange()}
                  value={this.state.titleInput}
                  onBlur={this.retitle}
                  onKeyDown={(e) => this.keyPress(e)}
                  spellCheck="false"
                />
              </form>
              <button
                className="editing image"
                onClick={() => this.focusUp().select()}
              >
                <span className="material-icons">
                  edit
                </span>
              </button>
            </div>
            <CardIndexContainer
              listId={list.id}
            />
            {/* {some new card form} */}
          </div>
        )}
      </Draggable>
    )
  }
}

export default ListIndexItem;