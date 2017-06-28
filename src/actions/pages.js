export const REQUEST_PAGES = 'REQUEST_PAGES';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';

function requestPages() {
  return {
    type: REQUEST_PAGES
  }
}

function receivePages(json) {
  return {
    type: RECEIVE_PAGES,
    pages: json,
    receivedAt: Date.now()
  }
}

function fetchPages() {
  return dispatch => {
    dispatch(requestPages());
    return fetch('https://public-api.wordpress.com/wp/v2/sites/blog.keadatabase.nz/pages')
      .then(response => response.json())
      .then(json => dispatch(receivePages(json)));
  }
}

function shouldFetchPages(state) {
  const pages = state.pages;
  if (!pages) {
    return true;
  }
  else {
    return false;
  }
}

export function fetchPagesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPages(getState())) {
      return dispatch(fetchPages());
    }
  }
}
