import { combineReducers } from 'redux';
import messagesReducer from './messages';
import usernameReducer from './usernames';
import reactionsReducer from './reactions';

export default combineReducers({
  messages: messagesReducer,
  username: usernameReducer,
  reactions: reactionsReducer
});
