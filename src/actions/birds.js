import { RSAA } from 'redux-api-middleware';

export const BIRD_REQUEST = 'bird/REQUEST';
export const BIRD_RECEIVE = 'bird/RECEIVE';
export const BIRD_ERROR = 'bird/ERROR';

function fetchBird(slug) {
  return {
    [RSAA]: {
      endpoint: `${process.env.REACT_APP_API_BASE}/birds/${slug}/`,
      method: 'GET',
      headers: { Accept: 'application/json' },
      types: [
        {
          type: BIRD_REQUEST,
          meta: { slug: slug },
        },
        {
          type: BIRD_RECEIVE,
          meta: { slug: slug },
        },
        {
          type: BIRD_ERROR,
          meta: { slug: slug },
        },
      ],
    },
  };
}

function shouldFetchBird(state, slug) {
  // TODO: optimise
  const bird = state.birds[slug];

  if (!bird) {
    return true;
  }
  return false;
}

export function getBird(slug) {
  return (dispatch, getState) => {
    if (shouldFetchBird(getState(), slug)) {
      return dispatch(fetchBird(slug));
    }
  };
}

export const FEATUREDBIRDS_REQUEST = 'featuredBirds/REQUEST';
export const FEATUREDBIRDS_RECEIVE = 'featuredBirds/RECEIVE';
export const FEATUREDBIRDS_ERROR = 'featuredBirds/ERROR';

function fetchFeaturedBirds() {
  return {
    [RSAA]: {
      endpoint: `${process.env.REACT_APP_API_BASE}/birds/?is_featured=2&ordering=random&page_size=5`,
      method: 'GET',
      headers: { Accept: 'application/json' },
      types: [FEATUREDBIRDS_REQUEST, FEATUREDBIRDS_RECEIVE, FEATUREDBIRDS_ERROR],
    },
  };
}

function shouldFetchFeaturedBirds(state) {
  const { featuredBirds } = state;

  if (featuredBirds.pending) {
    return false;
  }

  if (featuredBirds.fulfilled) {
    return false;
  }

  return true;
}

export function getFeaturedBirds() {
  return (dispatch, getState) => {
    if (shouldFetchFeaturedBirds(getState())) {
      return dispatch(fetchFeaturedBirds());
    }
  };
}
