import React from "react";
import { debounce } from "throttle-debounce";

class CommentBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newComment: ""
    }

    // this.handleSubmit = this.handleSubmit.bind(this)
    this.autoExpand = this.autoExpand.bind(this)
    this.showSave = this.showSave.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  componentDidMount() {
    this.autoExpand()
    window.addEventListener("resize", debounce(300, this.autoExpand))
    // if no currentUser, fetch them via currentUserId
  }

  componentWillUnmount() {
    window.removeEventListener("resize", debounce(300, this.autoExpand))
  }

  handleChange(e) {
    this.setState({newComment: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const {currentUserId, cardId, createComment} = this.props; 
    if (this.state.newComment) {
      let newComment = {
        author_id: currentUserId,
        card_id: cardId,
        body: this.state.newComment
      }
      createComment(newComment)
      this.setState({ newComment: "" })
    }
    let commentBox = document.getElementById(`new-comment`)
    commentBox.blur();

    let save = document.getElementById(`comment-save`)
    save.classList.add("no-height")
  }

  autoExpand() {
    let commentText = document.getElementById(`new-comment`)
    commentText.style.height = 0;
    const heightC = Math.max(commentText.scrollHeight + 4, 50)
    commentText.style.height = heightC + 'px';
  }

  showSave() {
    let save = document.getElementById(`comment-save`)
    save.classList.remove("no-height")
  }

  handleBlur() {
    if (this.state.newComment === "") {
      let save = document.getElementById(`comment-save`)
      save.classList.add("no-height")
    }
  }

  render() {
    const {newComment} = this.state

    return (
      <div id="card-show-comments" className="card-show-container">
        <div className="card-show-heading">
          <span className="material-icons">
            chat_bubble_outline
          </span>
          <div>Comments</div>
        </div>
        <form
          className="card-show-sub"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <span className="card-show-name-circle">
            {this.props.currentUser.username.substring(0, 2)}
          </span>
          <textarea
            className="card-show-textarea"
            id="new-comment"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => this.handleChange(e)}
            onFocus={this.showSave}
            onBlur={this.handleBlur}
          />
          <div
            id="comment-save"
            className="card-show-save no-height"
            onClick={(e) => this.handleSubmit(e)}
          >
            Save
          </div>
        </form>
        <div id="comment-container">
  
        </div>
      </div>
    )
  }
}

export default CommentBlock;