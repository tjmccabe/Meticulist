import {fetchSearchImages, fetchRandomImages} from '../util/unsplash_util';

export const RECEIVE_IMAGES = 'RECEIVE_SEARCH_RESULTS'
export const CLEAR_IMAGES = 'CLEAR_IMAGES'

const receiveImages = (response) => ({
    type: RECEIVE_IMAGES,
    response
});

export const clearImages = () => ({
    type: CLEAR_IMAGES,
});

export const fetchSearchResults = (query) => (dispatch) => (
    fetchSearchImages(query)
        .then(response => {
            console.log(response)
            dispatch(receiveImages(response))
        })
        .fail(errors => console.log(errors))
)
//take out console logs in prod

export const fetchRandomResults = () => (dispatch) => (
    fetchRandomImages()
        .then(response => dispatch(receiveImages(response)))
        .fail(errors => console.log(errors))
)