import { combineReducers } from 'redux';
import messagesReducer from './messages';
import usernameReducer from './usernames';

export default combineReducers({
  messages: messagesReducer,
  username: usernameReducer
});
