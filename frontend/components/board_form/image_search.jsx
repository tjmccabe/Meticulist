import React from 'react';
import ImageIndexContainer from './image_index_container';

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
        this.props.fetchRandomResults();
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    disabled() {
        return (this.state.text.length > 0) ? 'enabled' : 'disabled';
    }

    render() {
        const { fetchRandomResults } = this.props

        return (
            <div className="image-selector-form-container">
                <div className="image-selector-header">Board Background Image</div>
                <form className="image-selector-form" onSubmit={this.handleSearch}>
                    <input
                        type="text"
                        value={this.state.text}
                        placeholder="Search Photos by Unsplash"
                        onChange={this.handleChange}
                    />
                    <div className="image-button-container">
                        <button type="submit" className={this.disabled()}>Search</button>
                        <div>OR</div>
                        <button onClick={this.handleRandom} >Get Random Photos</button>
                    </div>
                </form>
                <hr/>
                < ImageIndexContainer
                    fetchRandomResults={fetchRandomResults}
                />
            </div>
        )
    }
}

export default ImageSearch;