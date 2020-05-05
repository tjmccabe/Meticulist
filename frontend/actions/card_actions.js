import * as CardAPI from '../util/card_api_util';

export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';

const receiveCard = (card) => ({
    type: RECEIVE_CARD,
    card
});

const removeCard = (cardId) => ({
    type: REMOVE_CARD,
    cardId
});

const receiveCardErrors = (errors) => ({
    type: RECEIVE_CARD_ERRORS,
    errors
})

export const createCard = (card) => (dispatch) => {
    CardAPI.createCard(card)
        .then(card => dispatch(receiveCard(card)))
        .fail(errors => console.log(errors.responseJSON))
    // .fail(errors => dispatch(receiveCardErrors(errors.responseJSON)))
}

export const deleteCard = (cardId) => (dispatch) => {
    CardAPI.deleteCard(cardId)
        .then(() => dispatch(removeCard(cardId)))
        .fail(errors => console.log(errors.responseJSON))
    // .fail(errors => dispatch(receiveCardErrors(errors.responseJSON)))
}