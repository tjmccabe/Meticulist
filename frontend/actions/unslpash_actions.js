import {fetchImages} from '../util/unsplash_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'

export const receiveSearchResults = (results) => ({
    type: RECEIVE_SEARCH_RESULTS,
    results
});

export const fetchSearchResults = (query) => (dispatch) => (
    fetchImages(query)
        .then(results => dispatch(receiveSearchResults(results)))
        .fail(errors => console.log(errors))
)