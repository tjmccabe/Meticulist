import * as CardAPI from '../util/card_api_util';

export const RECEIVE_NEW_CARD = 'RECEIVE_NEW_CARD';
export const RECEIVE_UPDATED_CARD = 'RECEIVE_UPDATED_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';

const receiveNewCard = (card) => ({
    type: RECEIVE_NEW_CARD,
    card
});

const receiveUpdatedCard = (card) => ({
    type: RECEIVE_UPDATED_CARD,
    card
});

const removeCard = (card) => ({
    type: REMOVE_CARD,
    card
});

const receiveCardErrors = (errors) => ({
    type: RECEIVE_CARD_ERRORS,
    errors
})

export const createCard = (card) => (dispatch) => {
    CardAPI.createCard(card)
        .then(card => dispatch(receiveNewCard(card)))
        .fail(errors => console.log(errors.responseJSON))
    // .fail(errors => dispatch(receiveCardErrors(errors.responseJSON)))
}

export const updateCard = (card) => (dispatch) => {
    CardAPI.updateCard(card)
        .then(card => dispatch(receiveUpdatedCard(card)))
        .fail(errors => console.log(errors.responseJSON))
    // .fail(errors => dispatch(receiveCardErrors(errors.responseJSON)))
}

export const deleteCard = (cardId) => (dispatch) => {
    CardAPI.deleteCard(cardId)
        .then(card => dispatch(removeCard(card)))
        .fail(errors => console.log(errors.responseJSON))
    // .fail(errors => dispatch(receiveCardErrors(errors.responseJSON)))
}