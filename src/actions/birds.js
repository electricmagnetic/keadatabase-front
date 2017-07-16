import { CALL_API } from 'redux-api-middleware';

export const BIRD_REQUEST = '/bird/REQUEST';
export const BIRD_RECEIVE = '/bird/RECEIVE';
export const BIRD_ERROR = '/bird/ERROR';

function fetchBird(slug) {
  return {
    [CALL_API]: {
      endpoint: `https://api.keadatabase.nz/birds/${slug}/`,
      method: 'GET',
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
