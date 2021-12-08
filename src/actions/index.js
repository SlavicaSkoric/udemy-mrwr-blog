import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //console.log('about to fetch posts!');
  await dispatch(fetchPosts());
  /*   //console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  //console.log(userIds);
  userIds.forEach((id) => dispatch(fetchUser(id))); */

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
//calling an action creator from an action creator
//getState - the second argument, in addition to dispatch, that redux thunk calls, function that exists on the redux store that gives us access to all the data inside of redux

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

//our action creator fetchPosts will return an action (object) of type 'FETCH_POSTS'
//dispatch function - unlimited power to initiate changes to the data on the redux side of our app
//getState function - can be called on a redux store and that will return all of the data or all the state inside of our redux store so that we can read or access it
//dispatch & getState - unlimited power over everything that goes on inside of our redux application
//we're not using getState here, just dispatch as argument

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

//memoized version:
/* export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
//above format - a function that returns a function
const _fetchUser = _.memoize(async (id, dispatch) => {
  //const response = await jsonPlaceholder.get('/users/' + id);
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});
//_fetchUser - _ - indicating a private variable, other engineers should not change it unless they really know what they are doing */
