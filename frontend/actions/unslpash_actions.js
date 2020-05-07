import {fetchSearchImages, fetchRandomImages} from '../util/unsplash_util';

export const RECEIVE_SEARCH_IMAGES = 'RECEIVE_SEARCH_IMAGES'
export const RECEIVE_RANDOM_IMAGES = 'RECEIVE_RANDOM_IMAGES'
export const CLEAR_IMAGES = 'CLEAR_IMAGES'

const receiveSearchImages = (response) => ({
    type: RECEIVE_SEARCH_IMAGES,
    response
});

const receiveRandomImages = (response) => ({
    type: RECEIVE_RANDOM_IMAGES,
    response
});

export const clearImages = () => ({
    type: CLEAR_IMAGES,
});

export const fetchSearchResults = (query) => (dispatch) => (
    fetchSearchImages(query)
        .then(response => {
            console.log(response)
            dispatch(receiveSearchImages(response))
        })
        .fail(errors => console.log(errors))
)
//take out console logs in prod

export const fetchRandomResults = () => (dispatch) => (
    fetchRandomImages()
        .then(response => dispatch(receiveRandomImages(response)))
        .fail(errors => console.log(errors))
)