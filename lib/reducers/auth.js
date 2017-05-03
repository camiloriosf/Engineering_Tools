import { AUTH_MODAL } from '../types/types'

export default function (state = {}, action) {
    switch (action.type) {
        case AUTH_MODAL:
            return { ...state, open: action.payload }
    }
    return state;
}