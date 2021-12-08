import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  //create a dummy reducer to trick redux into thinking that it has one:
  //replaceMe: () => 'hi there',
  posts: postsReducer,
  users: usersReducer,
});
