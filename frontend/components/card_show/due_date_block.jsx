import React from "react";

class DueDateBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newDueDate: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // if no currentUser, fetch them via currentUserId
  }

  handleChange(e) {
    // this.setState({ newComment: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { currentUserId, cardId } = this.props;
    // add comment to card
  }

  render() {
    const { newDueDate } = this.state;
    const {card} = this.props;
    if ( !card || !card.dueDate ) return null;

    return (
      <div id="card-show-due-date" className="card-show-container">
        <div className="card-show-heading">
          <span className="material-icons">
            alarm
          </span>
          <div>Due Date</div>
        </div>
        <div className="card-show-sub">
          <div
            id="display-due-date"
          >
            {card.dueDate}
          </div>
          <button>Edit Due Date</button>
          <button>Remove Due Date</button>
        </div>
      </div>
    )
  }
}

export default DueDateBlock;