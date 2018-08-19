import { RSAA } from 'redux-api-middleware';

export const BIRDSIGHTINGS_REQUEST = 'birdSightings/REQUEST';
export const BIRDSIGHTINGS_RECEIVE = 'birdSightings/RECEIVE';
export const BIRDSIGHTINGS_ERROR = 'birdSightings/ERROR';

function fetchBirdSightings(query) {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/sightings/birds/${query}`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [BIRDSIGHTINGS_REQUEST, BIRDSIGHTINGS_RECEIVE, BIRDSIGHTINGS_ERROR]
    }
  };
}

function shouldFetchBirdSightings(state, id) {
  const { birdSightings } = state;

  if (birdSightings.pending) {
    return false;
  }

  return true;
}

export function getBirdSightings() {
  const query = '?has_bird=2&page_size=5';
  return (dispatch, getState) => {
    if (shouldFetchBirdSightings(getState())) {
      return dispatch(fetchBirdSightings(query));
    }
  };
}

export function getBirdSightingsById(id = '') {
  const query = `?sighting=${id}&has_bird=1`;
  return (dispatch, getState) => {
    if (shouldFetchBirdSightings(getState())) {
      return dispatch(fetchBirdSightings(query));
    }
  };
}

export function getBirdSightingsByBird(slug = '') {
  const query = `?bird=${slug}&page_size=20`;
  return (dispatch, getState) => {
    if (shouldFetchBirdSightings(getState())) {
      return dispatch(fetchBirdSightings(query));
    }
  };
}
