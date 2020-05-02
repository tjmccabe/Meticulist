import React from 'react';

class ImageSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.disabled = this.disabled.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        if (this.state.text.length > 0) {
            this.props.fetchSearchResults(this.state.text)
            this.setState({ text: '' })
        }
    }

    handleRandom(e) {
        e.preventDefault();
        this.props.fetchRandomResults()
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
                <form onSubmit={this.handleSearch}>
                    <input
                        type="text"
                        value={this.state.text}
                        placeholder="Search for an image"
                        onChange={this.handleChange}
                    />
                    <button>Search Button</button>
                </form>
                <button onClick={this.handleRandom} >Get Randos</button>
                <div className="search-results-container">

                </div>
            </div>
        )
    }
}

export default ImageSearch;