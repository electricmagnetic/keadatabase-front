import { POSTS_REQUEST, POSTS_RECEIVE, POSTS_ERROR } from '../actions/posts';

const initialPostsState = {
  isFetching: false,
  items: [],
  isError: false
};

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case POSTS_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload,
        isError: false
      });
    case POSTS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: null,
        isError: true
      });
  default:
    return state;
  }
};

export default postsReducer;
