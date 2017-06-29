export const REQUEST_BIRD = 'REQUEST_BIRD';
export const RECEIVE_BIRD = 'RECEIVE_BIRD';

function requestBird(slug) {
  return {
    type: REQUEST_BIRD,
    slug
  }
}

function receiveBird(slug, json) {
  return {
    type: RECEIVE_BIRD,
    slug,
    item: json,
    receivedAt: Date.now()
  }
}

function fetchBird(slug) {
  return dispatch => {
    dispatch(requestBird(slug));
    return fetch(`https://api.keadatabase.nz/birds/${slug}/`)
      .then(response => response.json())
      .then(json => dispatch(receiveBird(slug, json)));
  }
}

function shouldFetchBird(state, slug) {
  if (!state.birdStore) {
    return true;
  }

  const bird = state.birdStore[slug];

  if (!bird) {
    return true;
  }
  else {
    return false;
  }
}

export function fetchBirdIfNeeded(slug) {
  return (dispatch, getState) => {
    if (shouldFetchBird(getState(), slug)) {
      return dispatch(fetchBird(slug));
    }
  }
}
