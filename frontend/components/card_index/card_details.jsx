import React from "react";

class CardDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.card;
  }

  render() {
    return(
      <div>{this.props.cardId}</div>
    )
  }
}

export default CardDetails;