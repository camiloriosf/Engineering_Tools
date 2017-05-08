import { combineReducers } from 'redux';
import auth from './reducers/auth';
import sidebar from './reducers/sidebar';

export default function getReducer(client) {
  return combineReducers({
    apollo: client.reducer(),
    auth,
    sidebar,
  });
}
