import {fetchSearchImages, fetchRandomImages} from '../util/unsplash_util';

export const RECEIVE_SEARCH_IMAGES = 'RECEIVE_SEARCH_IMAGES'
export const RECEIVE_RANDOM_IMAGES = 'RECEIVE_RANDOM_IMAGES'
export const RECEIVE_IMAGE_ERRORS = 'RECEIVE_IMAGE_ERRORS'

const receiveSearchImages = (response) => ({
    type: RECEIVE_SEARCH_IMAGES,
    response
});

const receiveRandomImages = (response) => ({
    type: RECEIVE_RANDOM_IMAGES,
    response
});

const receiveImageErrors = (errors) => ({
    type: RECEIVE_IMAGE_ERRORS,
    errors
})

export const fetchSearchResults = (query) => (dispatch) => (
    fetchSearchImages(query)
        .then(response => dispatch(receiveSearchImages(response)))
        .fail(errors => dispatch(receiveImageErrors(errors.responseJSON)))
)
//take out console logs in prod

export const fetchRandomResults = () => (dispatch) => (
    fetchRandomImages()
        .then(response => dispatch(receiveRandomImages(response)))
        .fail(errors => dispatch(receiveImageErrors(errors.responseJSON)))
)