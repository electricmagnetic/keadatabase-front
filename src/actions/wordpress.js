import { RSAA } from 'redux-api-middleware';

export const PAGES_REQUEST = 'pages/REQUEST';
export const PAGES_RECEIVE = 'pages/RECEIVE';
export const PAGES_ERROR = 'pages/ERROR';

function fetchPages() {
  return {
    [RSAA]: {
      endpoint: `https://public-api.wordpress.com/wp/v2/sites/blog.keadatabase.nz/pages?per_page=100`,
      method: 'GET',
      headers: { Accept: 'application/json' },
      types: [PAGES_REQUEST, PAGES_RECEIVE, PAGES_ERROR],
    },
  };
}

function shouldFetchPages(state) {
  const { pages } = state;

  if (pages.pending) {
    return false;
  }

  if (pages.fulfilled) {
    return false;
  }

  return true;
}

export function getPages() {
  return (dispatch, getState) => {
    if (shouldFetchPages(getState())) {
      return dispatch(fetchPages());
    }
  };
}

export const POSTS_REQUEST = 'posts/REQUEST';
export const POSTS_RECEIVE = 'posts/RECEIVE';
export const POSTS_ERROR = 'posts/ERROR';

function fetchPosts() {
  return {
    [RSAA]: {
      endpoint: `https://public-api.wordpress.com/wp/v2/sites/blog.keadatabase.nz/posts?per_page=1`,
      method: 'GET',
      headers: { Accept: 'application/json' },
      types: [POSTS_REQUEST, POSTS_RECEIVE, POSTS_ERROR],
    },
  };
}

function shouldFetchPosts(state) {
  const { posts } = state;

  if (posts.pending) {
    return false;
  }

  if (posts.fulfilled) {
    return false;
  }

  return true;
}

export function getPosts() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }
  };
}
