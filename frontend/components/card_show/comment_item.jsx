import React from "react";

class CommentItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: this.props.comment.body
    }
  }

  render() {
    const {body} = this.props.comment
    return(
      <div>{body}</div>
    )
  }
}

export default CommentItem