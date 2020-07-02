import React from 'react';

class DueDateDropdown extends React.Component {
  constructor(props) {
    super(props)
    
    this.updateState = this.updateState.bind(this)
    let nd = this.updateState()
    
    this.state = {
      year: nd.year,
      month: nd.month,
      day: nd.day,
      hour: nd.hour,
      minute: nd.minute
      // date: `${nd.month}-${nd.day}-${nd.year}`,
      // time: `${nd.hour}:${nd.minute}`
    }

    // this.MONTHS = {
    //   1: "January",
    //   2: "February",
    //   3: "March",
    //   4: "April",
    //   5: "May",
    //   6: "June",
    //   7: "July",
    //   8: "August",
    //   9: "September",
    //   10: "October",
    //   11: "November",
    //   12: "December"
    // }
  }

  componentDidUpdate(prevProps) {
    if (this.props.card.dueDate !== prevProps.card.dueDate) {
      let nd = this.updateState();
      this.setState({
        year: nd.year,
        month: nd.month,
        day: nd.day,
        hour: nd.hour,
        minute: nd.minute
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

    return {year, month, day, hour, minute}
  }

  handleChange(e, field) {
    if (field === "date") {
      let [year, month, day] = e.target.value.split("-");
      this.setState({ year, month, day })
    } else {
      let [hour, minute] = e.target.value.split(":");
      this.setState({ hour, minute })
    }
  }

  redate(e, remove) {
    if (e) e.preventDefault();
    const {card, updateCard} = this.props

    if (remove) {
      updateCard({ id: card.id, due_date: null })
    } else {
      let {year, month, day, hour, minute} = this.state;
      if (parseInt(year) > 2060) {
        this.setState({ year: 2060});
        return;
      } else if (parseInt(year) < 1980) {
        this.setState({ year: 1980});
        return;
      }
      // year = parseInt(year) > 2060 ? 2060 : parseInt(year) < 1980 ? 1980 : year
      let newDueDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`)
  
      if (JSON.stringify(newDueDate) === JSON.stringify(this.cdd)) return;
      updateCard({ id: card.id, due_date: newDueDate })
    }
  }
  
  render() {
    const { closeDropdowns, currentDropdown, dropdownId } = this.props;
    const { year, month, day, hour, minute } = this.state;

    const dateVal = `${year}-${month}-${day}`
    const timeVal = `${hour}:${minute}:00`

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
        <div className="due-date-box">
          <form
            className="dropdown-options due-date-inputs"
            onSubmit={(e) => this.redate(e)}
          >
            <div>
              <div className="dd-input-title">
                Date<span id="date-range">(1980 - 2060)</span>
              </div>
              <input
                id={`${dropdownId}-date`}
                className="due-date-input date"
                type="date"
                min="1970-01-01"
                max="2999-12-31"
                value={dateVal}
                onChange={(e) => this.handleChange(e, "date")}
              />
            </div>
            <div>
              <div className="dd-input-title">
                Time
              </div>
              <input
                className="due-date-input time"
                type="time"
                value={timeVal}
                onChange={(e) => this.handleChange(e, "time")}
              />
            </div>
          </form>
          <div className="due-date-buttons">
            <div
              id={`${dropdownId}-save`}
              className="due-date-button save"
              onClick={(e) => {this.redate(e); closeDropdowns()}}
            >
              Save
            </div>
            <div
              id={`${dropdownId}-remove`}
              className="due-date-button remove"
              onClick={(e) => { this.redate(e, true); closeDropdowns() }}
            >
              Remove
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default DueDateDropdown