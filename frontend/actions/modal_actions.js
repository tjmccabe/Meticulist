export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, cardId) => ({
        type: OPEN_MODAL,
        modal,
        cardId
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});