import React from 'react';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.cardOrders) return null;
        return(
            <div>
                {JSON.stringify(this.props.listOrder)}
                <br/>
                {Object.keys(this.props.cardOrders)}
                <br/>
                {JSON.stringify(Object.values(this.props.cardOrders))}
            </div>
        )
    }
}

export default ListIndex;