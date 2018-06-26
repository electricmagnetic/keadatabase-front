import { RSAA } from 'redux-api-middleware';

export const SIGHTINGS_REQUEST = 'sightings/REQUEST';
export const SIGHTINGS_RECEIVE = 'sightings/RECEIVE';
export const SIGHTINGS_ERROR = 'sightings/ERROR';

function fetchSightings() {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/sightings/sightings/?page_size=250`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR]
    }
  }
}

function shouldFetchSightings(state) {
  const { sightings } = state;

  if (sightings.pending) {
    return false;
  }

  if (sightings.fulfilled) {
    return false;
  }

  return true;
}

export function getSightings() {
  return (dispatch, getState) => {
    if (shouldFetchSightings(getState())) {
      return dispatch(fetchSightings());
    }
  }
}

export const BIRDSIGHTINGS_REQUEST = 'birdSightings/REQUEST';
export const BIRDSIGHTINGS_RECEIVE = 'birdSightings/RECEIVE';
export const BIRDSIGHTINGS_ERROR = 'birdSightings/ERROR';

function fetchBirdSightings() {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/sightings/birds/?has_bird=2&page_size=5`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [BIRDSIGHTINGS_REQUEST, BIRDSIGHTINGS_RECEIVE, BIRDSIGHTINGS_ERROR]
    }
  }
}

function shouldFetchBirdSightings(state) {
  const { birdSightings } = state;

  if (birdSightings.pending) {
    return false;
  }

  if (birdSightings.fulfilled) {
    return false;
  }

  return true;
}

export function getBirdSightings() {
  return (dispatch, getState) => {
    if (shouldFetchBirdSightings(getState())) {
      return dispatch(fetchBirdSightings());
    }
  }
}
