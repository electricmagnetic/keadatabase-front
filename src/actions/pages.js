import { RSAA } from 'redux-api-middleware';

export const PAGES_REQUEST = 'wordpress:/pages/REQUEST';
export const PAGES_RECEIVE = 'wordpress:/pages/RECEIVE';
export const PAGES_ERROR = 'wordpress:/pages/ERROR';

function fetchPages() {
  return {
    [RSAA]: {
      endpoint: `https://public-api.wordpress.com/wp/v2/sites/blog.keadatabase.nz/pages?per_page=20`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [PAGES_REQUEST, PAGES_RECEIVE, PAGES_ERROR]
    }
  }
}

function shouldFetchPages(state) {
  // TODO: optimise number of calls
  const pagesReducer = state.pagesReducer;

  if (pagesReducer.items.length === 0) {
    return true;
  }
  return false;
}

export function fetchPagesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPages(getState())) {
      return dispatch(fetchPages());
    }
  }
}
