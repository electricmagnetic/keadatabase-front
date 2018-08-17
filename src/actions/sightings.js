import { RSAA } from 'redux-api-middleware';

export const SIGHTINGS_REQUEST = 'sightings/REQUEST';
export const SIGHTINGS_RECEIVE = 'sightings/RECEIVE';
export const SIGHTINGS_ERROR = 'sightings/ERROR';

function fetchSightings(query) {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/sightings/sightings/${query}`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR]
    }
  };
}

function shouldFetchSightings(state) {
  const { sightings } = state;

  if (sightings.pending) {
    return false;
  }

  // All records are already retrieved
  if (
    sightings.value.results &&
    sightings.value.count > 1 &&
    sightings.value.results.length === sightings.value.count
  ) {
    return false;
  }

  return true;
}

export function getSightings(pageSize = 250) {
  const query = `?page_size=${pageSize}`;
  return (dispatch, getState) => {
    if (shouldFetchSightings(getState())) {
      return dispatch(fetchSightings(query));
    }
  };
}

export function getAllSightings() {
  return getSightings(10000);
}
