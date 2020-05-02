import React from 'react';

class ImageSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.disabled = this.disabled.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length > 0) {
            this.props.fetchSearchResults(this.state.text)
            this.setState({ text: '' })
        }
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    disabled() {
        return (this.state.text.length > 0) ? 'enabled' : 'disabled';
    }

    render() {
        return (
            <div className="image-selector-form">
                Image selector
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.text}
                        placeholder="Search for an image"
                        onChange={this.handleChange}
                    />
                    <button>Search Button</button>
                </form>
                <div className="search-results-container">

                </div>
            </div>
        )
    }
}

export default ImageSearch;