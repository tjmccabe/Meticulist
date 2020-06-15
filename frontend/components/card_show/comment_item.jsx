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
    textArea.select()
  }

  stopEditing() {
    let { comment } = this.props
    let textArea = document.getElementById(`edit-comment-${comment.id}`)
    let displayTitle = document.getElementById(`display-comment-${comment.id}`)
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

  render() {
    const { comment, currentUserId, updateComment, deleteComment } = this.props

    const editLink = currentUserId === comment.authorId ? (
      <div
        onClick={this.startEditing}
      >
        Edit
      </div>
    ) : null;

    const deleteLink = currentUserId === comment.authorId ? (
      <div
        onClick={() => deleteComment(comment.id)}
      >
        Delete
      </div>
    ) : null;

    const commentLinks = (editLink || deleteLink) ? (
      <div className="comment-links">
        {editLink}
        {deleteLink}
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
      </form>
    ) : null

    return(
      <div className="comment-item">
        <span className="card-show-name-circle">
          {comment.authorName.substring(0, 2)}
        </span>
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