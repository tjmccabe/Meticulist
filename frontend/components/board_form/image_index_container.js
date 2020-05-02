import { connect } from 'react-redux'
import ImageIndex from './image_index';

const mSTP = state => ({
    images: state.ui.images
})

const mDTP = (dispatch, ownProps) => ({
    
})

export default connect(mSTP, mDTP)(ImageIndex);