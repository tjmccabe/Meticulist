import React from "react";

class CommentItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: this.props.comment.body
    }

    this.startEditing = this.startEditing.bind(this)
    this.stopEditing = this.stopEditing.bind(this)
    this.autoExpand = this.autoExpand.bind(this)
    this.showSave = this.showSave.bind(this)
    this.hideSave = this.hideSave.bind(this)
  }

  componentDidMount() {
    this.autoExpand()
  }

  componentDidUpdate(prevProps) {
    if (prevProps && this.props.comment.body !== prevProps.comment.body) {
      this.setState({ body: this.props.comment.body })
    }
  }

  handleChange(e) {
    this.setState({ body: e.target.value }, this.autoExpand)
  }

  rebody(e) {
    e.preventDefault()
    if (this.state.body.length > 0 && this.state.body !== this.props.comment.body) {
      let newComment = { id: this.props.comment.id, body: this.state.body }
      this.props.updateComment(newComment)
      this.setState({ body: newComment.body }, this.stopEditing)
    } else {
      this.setState({ body: this.props.comment.body }, this.stopEditing)
    }
  }

  startEditing() {
    let {comment} = this.props
    let textArea = document.getElementById(`edit-comment-${comment.id}`)
    let displayTitle = document.getElementById(`display-comment-${comment.id}`)
    displayTitle.classList.add("no-display")
    textArea.parentElement.classList.remove("no-display")
    this.autoExpand()
    this.showSave();
    textArea.select()
  }

  stopEditing() {
    let { comment } = this.props
    let textArea = document.getElementById(`edit-comment-${comment.id}`)
    let displayTitle = document.getElementById(`display-comment-${comment.id}`)
    this.hideSave();
    textArea.parentElement.classList.add("no-display")
    displayTitle.classList.remove("no-display")
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.rebody(e);
    } else if (e.keyCode === 27) {
      this.setState({ body: this.props.comment.body }, this.stopEditing)
    }
  }

  autoExpand() {
    let { comment } = this.props
    let textArea = document.getElementById(`edit-comment-${comment.id}`)
    textArea.style.height = 0;
    const height = textArea.scrollHeight + 4
    textArea.style.height = height + 'px';
  };

  showSave() {
    let save = document.getElementById(`comment-edit-${this.props.comment.id}`)
    save.classList.remove("no-height")
  }

  hideSave() {
    let save = document.getElementById(`comment-edit-${this.props.comment.id}`)
    save.classList.remove("no-height")
  }

  formatTime(time) {
    const date = new Date(time)
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    })

    const [
      { value: month },,
      { value: day },,
      { value: year },,
      { value: hour },,
      { value: minute },,
      { value: dayPeriod }
    ] = dateTimeFormat.formatToParts(date)

    return (`${month} ${day}, ${year} at ${hour}:${minute} ${dayPeriod}`)
  }

  render() {
    const { comment, currentUserId, deleteComment } = this.props

    const commentLinks = currentUserId === comment.authorId ? (
      <div className="comment-links">
        <div onClick={this.startEditing}>
          Edit
        </div>
        <span>-</span>
        <div onClick={() => deleteComment(comment.id)}>
          Delete
        </div>
      </div>
    ) : null;

    const commentEditForm = currentUserId === comment.authorId ? (
      <form
        className="comment-edit-form no-display"
        onSubmit={(e) => this.rebody(e)}
      >
        <textarea
          id={`edit-comment-${comment.id}`}
          className="comment-body-edit"
          onChange={(e) => this.handleChange(e)}
          value={this.state.body}
          onKeyDown={(e) => this.keyPress(e)}
        />
        <div
          id={`comment-edit-${this.props.comment.id}`}
          className="card-show-save no-height"
          onClick={(e) => this.rebody(e)}
        >
          Save
        </div>
        <span
          className="material-icons stop-editing-comment"
          onClick={() => this.setState({ body: this.props.comment.body }, this.stopEditing)}
        >
          clear
        </span>
      </form>
    ) : null;

    const edited = comment.createdAt !== comment.updatedAt ? (
      <div className="comment-edited">(edited)</div>
    ) : null;

    return(
      <div className="comment-item">
        <span className="card-show-name-circle">
          {comment.authorName.substring(0, 2)}
        </span>
        <div className="basic-comment-info">
          <div className="comment-author-name">
            {comment.authorName}
          </div>
          <div className="comment-created-at">
            {this.formatTime(comment.createdAt)}
          </div>
          {edited}
        </div>
        <div
          className="display-comment-body"
          id={`display-comment-${comment.id}`}
        >
          <div
            className="comment-body"
          >
            {comment.body}
          </div>
          {commentLinks}
        </div>
        {commentEditForm}
      </div>
    )
  }
}

export default CommentItem