import { AUTH_MODAL, AUTH_LOGIN } from '../types/types';

export function authModal({ open = false }) {
  return function (dispatch) {
    dispatch({ type: AUTH_MODAL, payload: open });
  };
}

export function login({ email }) {
  return function (dispatch) {
    dispatch({ type: AUTH_LOGIN, payload: { sent: true, email, phrase: 'Test Phrase One' } });
  };
}
