import * as CardAPI from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';

const receiveCards = (cards) => ({
    type: RECEIVE_CARDS,
    cards
});

const receiveCardErrors = (errors) => ({
    type: RECEIVE_CARD_ERRORS,
    errors
})

export const createCard = (card) => (dispatch) => {
    CardAPI.createCard(card)
        .then(cards => dispatch(receiveCards(cards)))
        .fail(errors => console.log(errors.responseJSON))
    // .fail(errors => dispatch(receiveCardErrors(errors.responseJSON)))
}

export const updateCard = (card) => (dispatch) => {
    CardAPI.updateCard(card)
        .then(cards => dispatch(receiveCards(cards)))
        .fail(errors => console.log(errors.responseJSON))
    // .fail(errors => dispatch(receiveCardErrors(errors.responseJSON)))
}

export const deleteCard = (cardId) => (dispatch) => {
    CardAPI.deleteCard(cardId)
        .then(cards => dispatch(receiveCards(cards)))
        .fail(errors => console.log(errors.responseJSON))
    // .fail(errors => dispatch(receiveCardErrors(errors.responseJSON)))
}