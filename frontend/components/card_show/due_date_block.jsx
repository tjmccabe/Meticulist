import React from "react";
import DueDateDropdownContainer from "./due_date_dropdown_container";

class DueDateBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      overdue: false,
      dueSoon: false
    }

    this.setTimers = this.setTimers.bind(this)
  }

  componentDidMount() {
    this.setTimers()
  }

  componentDidUpdate(prevProps) {
    if (this.props.dueDate !== prevProps.dueDate) {
      this.setTimers()
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

    this.date = new Date(this.props.dueDate);
    this.now = new Date()

    let overdue = this.date - this.now < 0
    let notSoon = this.date - this.now > 86400000;

    if (notSoon) {
      this.timeout1 = setTimeout(() => {
        this.setState({ dueSoon: true })
      }, date - now - 86400000)
      this.timeout2 = setTimeout(() => {
        this.setState({ dueSoon: false, overdue: true })
      }, date - now)
    }

    if (!overdue && !notSoon) {
      this.setState({ dueSoon: true })
      this.timeout1 = setTimeout(() => {
        this.setState({ dueSoon: false, overdue: true })
      }, date - now)
    }

    if (overdue) {
      this.setState({ overdue: true })
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
    ] = dateTimeFormat.formatToParts(date)

    return (`${month} ${day}, ${year} at ${hour}:${minute} ${dayPeriod}`)
  }


  render() {
    const {card, dueDate} = this.props;
    if (!card || !dueDate) return null;

    const {overdue, dueSoon} = this.state;
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
            onClick={() => openDropdown("dueDateLeft")}
          >
            <div>
              {formatTime()}
            </div>
            {dueDateLabel}
          </div>
        </div>
        <DueDateDropdownContainer
          currentDueDate={dueDate}
          dropdownId="dueDateLeft"
          card={card}
        />
      </div>
    )
  }
}

export default DueDateBlock;