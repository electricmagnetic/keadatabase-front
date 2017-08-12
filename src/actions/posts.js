import { RSAA } from 'redux-api-middleware';

export const POSTS_REQUEST = 'wordpress:/posts/REQUEST';
export const POSTS_RECEIVE = 'wordpress:/posts/RECEIVE';
export const POSTS_ERROR = 'wordpress:/posts/ERROR';

function fetchPosts() {
  return {
    [RSAA]: {
      endpoint: `https://public-api.wordpress.com/wp/v2/sites/blog.keadatabase.nz/posts?per_page=1`,
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
