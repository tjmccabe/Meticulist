import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newListTitle: "",
      addingList: false
    }

    this.keepGoing = false;

    this.listener = this.listener.bind(this)
    this.autoExpand = this.autoExpand.bind(this)
    this.startAdding = this.startAdding.bind(this)
    this.stopAdding = this.stopAdding.bind(this)
    this.scroll = this.scroll.bind(this)
  }

  scroll() {
    let listIndex = document.getElementById(`outer-list-index`)
    listIndex.scrollLeft = listIndex.scrollWidth;
  }

  startAdding() {
    document.addEventListener("click", this.listener)
    this.setState({ addingList: true }, () => {
      this.autoExpand()
      document.getElementById(`new-list-${this.props.boardId}`).select()
    })
    this.scroll()
  }

  stopAdding() {
    this.setState({ addingList: false })
    document.removeEventListener("click", this.listener)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listOrder.length < this.props.listOrder.length) {
      if (this.keepGoing) this.startAdding();
      this.keepGoing = false;
    }
  }
  
  componentWillUnmount() {
    document.removeEventListener("click", this.listener)
  }

  listener(e) {
    let outerForm = document.getElementById(`list-form-container`)
    if (!outerForm.contains(e.target)) this.setState({ addingList: false });
  }

  handleChange(e) {
    this.setState({ newListTitle: e.target.value }, this.autoExpand)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { newListTitle } = this.state;
    const { createList, boardId } = this.props

    if (newListTitle.length > 0) {
      createList({ title: newListTitle, board_id: boardId })
      this.setState({ newListTitle: "", addingList: false })
      this.keepGoing = true;
      document.removeEventListener("click", this.listener)
    } else this.stopAdding();
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    } else if (e.keyCode === 27) {
      this.stopAdding();
    }
  }

  autoExpand() {
    let textArea = document.getElementById(`new-list-${this.props.boardId}`)
    textArea.style.height = 0;
    const height = textArea.scrollHeight + 4
    textArea.style.height = height > 36 ? height + "px" : "36px";
  };

  render() {
    const { boardId } = this.props;
    const { addingList } = this.state;

    const listForm = addingList ? (
      <div
        id={`new-list-form`}
        className="new-list-form-container"
      >
        <form
          className="new-list-form"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <textarea
            id={`new-list-${boardId}`}
            className="new-list-title-edit"
            onChange={(e) => this.handleChange(e)}
            value={this.state.newListTitle}
            onKeyDown={(e) => this.keyPress(e)}
            placeholder="Enter list title..."
            spellCheck="false"
          />
        </form>
        <div className="add-list-buttons">
          <button
            className="add-list-button"
            onClick={(e) => this.handleSubmit(e)}
          >
            Add List
          </button>
          <button
            className="stop-adding image"
            onClick={() => this.setState({ addingList: false })}
            type="button"
          >
            <span className="material-icons">
              clear
            </span>
          </button>
        </div>
      </div>
    ) : (
    <div className="add-a-list"
      onClick={this.startAdding}
    >
      <span className="material-icons">
        add
      </span>
      <div>Add a list</div>
    </div>
    );

    return (
      <div id="list-form-container">
        {listForm}
      </div>
    )
  }
}

export default ListForm;