import React from 'react';
// import ImageIndexItem from './image_index_item';    MAYBE

class ImageIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchRandomResults();
    }

    render() {
        const {images} = this.props;
        
        const ImageList = images[0] ? (
            <ul>
                {images.map((image, idx) => (
                    <li
                        className="image-tile"
                        key={idx}
                        style={{ backgroundImage: `url(${image.thumb})` }}
                    >

                    </li>
                ))}
            </ul>
        ) : null;

        return (
            <div className="images-container">
                {ImageList}
            </div>
        )
    }
}

export default ImageIndex;