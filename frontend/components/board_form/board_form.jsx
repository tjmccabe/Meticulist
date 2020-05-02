import React from 'react';
import ImageSearch from './image_search';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            admin_id: this.props.currentUserId,
            bgp_big_url: '',
            bgp_small_url: '',
            bgp_alt_text: '',
        }

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBackground = this.updateBackground.bind(this);
        this.disabled = this.disabled.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
        // this.props.clearImages();
        // maybe clear images after leaving the modal
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

    updateBackground(image) {
        if (image) {
            this.setState({
                bgp_big_url: image.full,
                bgp_small_url: image.small,
                bgp_alt_text: image.alt,
            })
        } else {
            this.setState({
                bgp_big_url: '',
                bgp_small_url: '',
                bgp_alt_text: '',
            })
        }
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
                    <div
                        className="board-entry-container"
                        style={{ backgroundImage: `url(${this.state.bgp_small_url})` }}
                    >
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
                    updateBackground={this.updateBackground}
                />
            </div>
        )
    }
}

export default BoardForm;