import React from 'react';
import ImageSearch from './image_search';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            admin_id: this.props.currentUserId
        }

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.disabled = this.disabled.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
        this.props.clearImages();
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.title.length > 0) {
            this.props.createBoard(this.state);
            this.setState({title: '', description: ''})
            this.props.closeModal()
        }
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    disabled() {
        return (this.state.title.length > 0) ? 'enabled' : 'disabled';
    }

    render() {
        const {
            closeModal,
            errors,
            fetchSearchResults,
            fetchRandomResults
        } = this.props;

        const BoardErrors = errors[0] ? (
            <div className="board-errors">{errors[0]}</div>
        ) : null;

        return (
            <div className='big-board-form'>
                <form id="new-board-form" onSubmit={this.handleSubmit}>
                    <div className="board-entry-container">
                        <div className="board-entry-darkener">
                            <div className="board-entry-header">
                                <input
                                    id="board-title-input"
                                    type="text"
                                    autoFocus
                                    value={this.state.title}
                                    placeholder="Add board title"
                                    onChange={this.handleChange('title')}
                                />
                                <span className="material-icons close-modal" onClick={closeModal}>
                                    clear
                                </span>
                            </div>
                            <textarea
                                id="board-description-input"
                                value={this.state.description}
                                placeholder="Add board description (optional)"
                                onChange={this.handleChange('description')}
                            />
                        </div>
                    </div>
                    <button className={`board-form-button ${this.disabled()}`}>Create Board</button>
                </form>
                <ImageSearch
                    fetchSearchResults={fetchSearchResults}
                    fetchRandomResults={fetchRandomResults}
                />
            </div>
        )
    }
}

export default BoardForm;