import React from 'react';

class DueDateDropdown extends React.Component {
  constructor(props) {
    super(props)
    
    this.updateState = this.updateState.bind(this)
    let nd = this.updateState()
    
    this.state = {
      date: `${nd[0]}-${nd[1]}-${nd[2]}`,
      time: `${nd[3]}:${nd[4]}`
    }

    console.log(`${this.props.dropdownId}`)
    console.log(this.props)
    console.log(this.props.card.dueDate)
    console.log(this.cdd)
  }

  componentDidUpdate(prevProps) {
    if (this.props.card.dueDate !== prevProps.card.dueDate) {
      let nd = this.updateState();
      this.setState({
        date: `${nd[0]}-${nd[1]}-${nd[2]}`,
        time: `${nd[3]}:${nd[4]}`
      })
    }
  }

  updateState() {
    this.cdd = this.props.card.dueDate ? new Date(this.props.card.dueDate) : new Date()
    let year = this.cdd.getFullYear()
    let month = this.cdd.getMonth() + 1
    let day = this.cdd.getDate()
    let hour = this.cdd.getHours()
    let minute = this.cdd.getMinutes()
    if (month < 10) month = "0" + month
    if (day < 10) day = "0" + day
    if (hour < 10) hour = "0" + hour
    if (minute < 10) minute = "0" + minute

    return [year, month, day, hour, minute]
  }

  handleChange(e, field) {
    this.setState({ [field]: e.target.value })
  }

  redate(e, remove) {
    if (e) e.preventDefault();
    const {card, updateCard} = this.props

    if (remove) {
      updateCard({ id: card.id, due_date: null })
    } else {
      let newDueDate = new Date(this.state.date + " " + this.state.time)
  
      if (JSON.stringify(newDueDate) === JSON.stringify(this.cdd)) return;
      updateCard({ id: card.id, due_date: newDueDate })
    }
  }
  
  render() {
    const { closeDropdowns, currentDropdown, dropdownId } = this.props;
    const { date, time } = this.state;

    const classes = (currentDropdown === dropdownId) ?
      "due-date-dropdown dropdown-content shown"
      : "due-date-dropdown dropdown-content"

    return (
      <div
        id={dropdownId}
        className={classes}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dropdown-header">
          <span>
            Edit Due Date
          </span>
          <span className="material-icons close-dd" onClick={closeDropdowns}>
            clear
          </span>
        </div>
        <hr />
        <form
          className="dropdown-options due-date-input"
          onSubmit={(e) => this.redate(e)}
        >
          <div>
            <div>
              Date
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => this.handleChange(e, "date")}
            />
          </div>
          <div>
            <div>
              Time
            </div>
            <input
              type="time"
              value={time}
              onChange={(e) => this.handleChange(e, "time")}
            />
          </div>
        </form>
        <div className="due-date-buttons">
          <div
            id={`${dropdownId}-save`}
            className="card-show-save"
            onClick={(e) => {this.redate(e); closeDropdowns()}}
          >
            Save
          </div>
          <div
            id={`${dropdownId}-remove`}
            className="card-show-remove"
            onClick={(e) => { this.redate(e, true); closeDropdowns() }}
          >
            Remove
          </div>
        </div>
      </div>
    )
  }

}

export default DueDateDropdown