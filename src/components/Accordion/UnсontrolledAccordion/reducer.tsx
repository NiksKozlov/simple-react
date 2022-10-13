type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

export const reducer = (state: boolean, action: ActionType): boolean => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            return state
    }
}