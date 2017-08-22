import { RSAA } from 'redux-api-middleware';

export const BIRD_REQUEST = 'api:/bird/REQUEST';
export const BIRD_RECEIVE = 'api:/bird/RECEIVE';
export const BIRD_ERROR = 'api:/bird/ERROR';

function fetchBird(slug) {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/birds/${slug}/`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [
        {
          type: BIRD_REQUEST,
          meta: { slug: slug }
        },
        {
          type: BIRD_RECEIVE,
          meta: { slug: slug }
        },
        {
          type: BIRD_ERROR,
          meta: { slug: slug }
        }
      ]
    }
  }
}

function shouldFetchBird(state, slug) {
  // TODO: optimise
  const bird = state.birdsReducer[slug];

  if (!bird) {
    return true;
  }
  return false;
}

export function fetchBirdIfNeeded(slug) {
  return (dispatch, getState) => {
    if (shouldFetchBird(getState(), slug)) {
      return dispatch(fetchBird(slug));
    }
  }
}
