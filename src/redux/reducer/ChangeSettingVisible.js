import { SET_MODAL_VISIBLE } from '../actions/ActionType'

export default setVisibility = (state = 'All', action) => {
    switch (action.type) {
        case SET_MODAL_VISIBLE:
            return {
                ...state,
                text: action.text,
            }
        default:
            return {
                state
            }
    }
}