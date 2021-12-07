import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response });
};

//our action creator fetchPosts will return an action (object) of type 'FETCH_POSTS'
//dispatch function - unlimited power to initiate changes to the data on the redux side of our app
//getState function - can be called on a redux store and that will return all of the data or all the state inside of our redux store so that we can read or access it
//dispatch & getState - unlimited power over everything that goes on inside of our redux application
//we're not using getState here, just dispatch as argument
