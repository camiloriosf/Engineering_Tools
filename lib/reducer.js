import { combineReducers } from 'redux';
import auth from './reducers/auth';

export default function getReducer(client) {
  return combineReducers({
    apollo: client.reducer(),
    auth,
  });
}
