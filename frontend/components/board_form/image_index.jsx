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
            <ul className="image-list">
                {images.map((image, idx) => (
                    <li
                        className="image-tile"
                        key={idx}
                        style={{ backgroundImage: `url(${image.thumb})` }}
                    >
                        <div className="image-tile-darkener">

                        </div>
                    </li>
                ))}
                <li className="image-tile" id="default-background-tile">
                    <div className="image-tile-darkener">
                        None
                    </div>
                </li>
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