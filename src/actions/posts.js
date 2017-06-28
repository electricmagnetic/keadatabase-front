export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json,
    receivedAt: Date.now()
  }
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return fetch('https://public-api.wordpress.com/wp/v2/sites/blog.keadatabase.nz/posts?per_page=2')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)));
  }
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchPosts());
  }
}
