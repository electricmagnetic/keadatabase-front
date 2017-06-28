import { combineReducers } from 'redux';

//import { REQUEST_BIRDS, RECEIVE_BIRDS } from '../actions/birds.js';
//import { REQUEST_PAGES, RECEIVE_PAGES } from '../actions/pages.js';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/posts.js';

/*const birds = (state = {}, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const pages = (state = {}, action) => {
  switch (action.type) {
  default:
    return state;
  }
};*/

const initialPostsState = {
  isFetching: false,
  items: []
};

const postsStore = (state = initialPostsState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
  default:
    return state;
  }
};

export default combineReducers({
  //birds,
  //pages,
  postsStore
});
