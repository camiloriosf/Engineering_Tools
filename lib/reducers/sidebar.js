import { SIDEBAR_OPEN } from '../types/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, open: !state.open };
    default:
      return state;
  }
}
