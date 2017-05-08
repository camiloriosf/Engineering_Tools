import { SIDEBAR_OPEN } from '../types/types';

export function sidebarOpen() {
  return function SidebarOpen(dispatch) {
    dispatch({ type: SIDEBAR_OPEN });
  };
}
