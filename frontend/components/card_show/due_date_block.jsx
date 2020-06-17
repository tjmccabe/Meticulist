import React from "react";
import DueDateDropdownContainer from "./due_date_dropdown_container";

class DueDateBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      overdue: false,
      dueSoon: false,
      date: new Date(this.props.dueDate)
    }

    this.setTimers = this.setTimers.bind(this)
    this.formatTime = this.formatTime.bind(this)
  }

  componentDidMount() {
    this.setTimers()
  }

  componentDidUpdate(prevProps) {
    if (this.props.dueDate !== prevProps.dueDate) {
      this.setState({date: new Date(this.props.dueDate)}, this.setTimers)
    }
  }

  componentWillUnmount() {
    if (this.timeout1) clearTimeout(this.timeout1)
    if (this.timeout2) clearTimeout(this.timeout2)
  }

  setTimers() {
    if (this.timeout1) clearTimeout(this.timeout1)
    if (this.timeout2) clearTimeout(this.timeout2)
    if (!this.props.dueDate) return;

    this.now = new Date()

    let overdue = this.state.date - this.now < 0
    let notSoon = this.state.date - this.now > 86400000;

    if (notSoon) {
      this.setState({ dueSoon: false, overdue: false })
      this.timeout1 = setTimeout(() => {
        this.setState({ dueSoon: true, overdue: false})
      }, this.state.date - this.now - 86400000)
      this.timeout2 = setTimeout(() => {
        this.setState({ dueSoon: false, overdue: true })
      }, this.state.date - this.now)
    }

    if (!overdue && !notSoon) {
      this.setState({ dueSoon: true, overdue: false })
      this.timeout1 = setTimeout(() => {
        this.setState({ dueSoon: false, overdue: true })
      }, this.state.date - this.now)
    }

    if (overdue) {
      this.setState({ dueSoon: false, overdue: true })
    }
  }

  formatTime() {
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    })

    const [
      { value: month }, ,
      { value: day }, ,
      { value: year }, ,
      { value: hour }, ,
      { value: minute }, ,
      { value: dayPeriod }
    ] = dateTimeFormat.formatToParts(this.state.date)

    return (`${month} ${day}, ${year} at ${hour}:${minute} ${dayPeriod}`)
  }

  render() {
    const {card, dueDate, openDropdown} = this.props;
    if (!card || !dueDate) return null;

    const {overdue, dueSoon, date} = this.state;

    const dueDateLabel = overdue ? (
      <span id="overdue" className="due-date-label overdue">OVERDUE</span>
    ) : dueSoon ? (
      <span id="due-soon" className="due-date-label due-soon">DUE SOON</span>
    ) : null;

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
            onClick={() => openDropdown("due-date-left")}
          >
            <span id="">
              {this.formatTime()}
            </span>
            {dueDateLabel}
          </div>
        </div>
        <DueDateDropdownContainer
          dropdownId="due-date-left"
          card={card}
        />
      </div>
    )
  }
}

export default DueDateBlock;