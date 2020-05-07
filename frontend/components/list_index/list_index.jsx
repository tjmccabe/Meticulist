import React from 'react';
import {} from 'react-beautiful-dnd';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            listOrder: this.props.listOrder,
            cardOrders: this.props.cardOrders
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.boardId !== prevProps.boardId || !this.props.boardId) {
            // maybe save changes here?
            this.props.fetchBoard(this.props.boardId)
                .then(this.setState({
                    listOrder: this.props.listOrder,
                    cardOrders: this.props.cardOrders
                }))
        };
        if (!prevProps.cardOrders && this.props.cardOrders) {
            this.setState({
                listOrder: this.props.listOrder,
                cardOrders: this.props.cardOrders
            })
        }
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId)
            .then(this.setState({
                listOrder: this.props.listOrder,
                cardOrders: this.props.cardOrders
                // }, () => {debugger}))
            }))
        // debugger
    }

    render() {
        // debugger
        if (!this.state.listOrder) {
            // this.props.fetchBoard(this.props.boardId);
            return <div>BROKEN, YO</div>;
        }
        return(
            <div>
                {JSON.stringify(this.state.listOrder)}
                <br/>
                {Object.keys(this.state.cardOrders)}
                <br/>
                {JSON.stringify(Object.values(this.state.cardOrders))}
            </div>
        )
    }
}

export default ListIndex;




// example state:
// state = {
//     listOrder: [96, 47, 72],
//     cardOrders: {
//         47: [1,7,4,9],
//         72: [2],
//         96: [8,3,10]
//     }
// }