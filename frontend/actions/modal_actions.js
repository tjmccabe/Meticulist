export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, identifier) => ({
        type: OPEN_MODAL,
        modal,
        identifier
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});