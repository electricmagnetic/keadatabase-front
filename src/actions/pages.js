import { CALL_API } from 'redux-api-middleware';

export const PAGES_REQUEST = '/pages/REQUEST';
export const PAGES_RECEIVE = '/pages/RECEIVE';
export const PAGES_ERROR = '/pages/ERROR';

function fetchPages() {
  return {
    [CALL_API]: {
      endpoint: `https://public-api.wordpress.com/wp/v2/sites/blog.keadatabase.nz/pages`,
      method: 'GET',
      types: [PAGES_REQUEST, PAGES_RECEIVE, PAGES_ERROR]
    }
  }
}


function shouldFetchPages(state) {
  //TODO: optimise
  return true;
}

export function fetchPagesIfNeeded() {
  return (dispatch, getState) => {
    console.log(getState());
    if (shouldFetchPages(getState())) {
      return dispatch(fetchPages());
    }
  }
}
