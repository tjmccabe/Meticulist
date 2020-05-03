import React from 'react';
// import ImageIndexItem from './image_index_item';    MAYBE

class ImageIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchRandomResults();
    // }

    render() {
        const {images, updateBackground} = this.props;
        
        const ImageList = (
            <ul className="image-list">
                {images.map((image, idx) => (
                    <li
                        className="image-tile"
                        key={idx}
                        onClick={() => updateBackground(image)}
                        style={{ backgroundImage: `url(${image.small})` }}
                    >
                        <div className="image-tile-darkener">

                        </div>
                    </li>
                ))}
                <li
                    className="image-tile"
                    id="default-background-tile"
                    onClick={() => updateBackground()}
                >
                    <div className="image-tile-darkener">
                        None
                    </div>
                </li>
            </ul>
        ) 

        return (
            <div className="images-container">
                {ImageList}
            </div>
        )
    }
}

export default ImageIndex;