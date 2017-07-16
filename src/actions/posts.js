import { CALL_API } from 'redux-api-middleware';

export const POSTS_REQUEST = '/posts/REQUEST';
export const POSTS_RECEIVE = '/posts/RECEIVE';
export const POSTS_ERROR = '/posts/ERROR';

function fetchPosts() {
  return {
    [CALL_API]: {
      endpoint: `https://public-api.wordpress.com/wp/v2/sites/blog.keadatabase.nz/posts?per_page=2`,
      method: 'GET',
      types: [POSTS_REQUEST, POSTS_RECEIVE, POSTS_ERROR]
    }
  }
}

function shouldFetchPosts(state) {
  // TODO: optimise
  const postsReducer = state.postsReducer;
  if (postsReducer.items.length === 0) {
    return true;
  }
  return false;
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }
  }
}
