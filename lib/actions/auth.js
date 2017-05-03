import { AUTH_MODAL } from '../types/types';

export function authModal({ open = false }) {
    return function (dispatch) {
        dispatch({ type: AUTH_MODAL, payload: open })
    }
}