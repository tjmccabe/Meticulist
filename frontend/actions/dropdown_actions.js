export const OPEN_DROPDOWN = 'OPEN_DROPDOWN'
export const CLOSE_DROPDOWNS = 'CLOSE_DROPDOWNS'

export const openDropdown = (dropdown) => ({
    type: OPEN_DROPDOWN,
    dropdown
})

export const closeDropdowns = () => ({
    type: CLOSE_DROPDOWNS
})