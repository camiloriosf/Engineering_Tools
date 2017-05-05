import { AUTH_MODAL, AUTH_LOGIN } from '../types/types';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_MODAL:
      return { ...state, open: action.payload };
    case AUTH_LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
