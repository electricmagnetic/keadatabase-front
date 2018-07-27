import { RSAA } from 'redux-api-middleware';

export const SIGHTINGS_REQUEST = 'sightings/REQUEST';
export const SIGHTINGS_RECEIVE = 'sightings/RECEIVE';
export const SIGHTINGS_ERROR = 'sightings/ERROR';

function fetchSightings(pageSize) {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/sightings/sightings/?page_size=${pageSize}`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR]
    }
  };
}

function shouldFetchSightings(state, pageSize) {
  const { sightings } = state;

  if (sightings.pending) {
    return false;
  }

  if (sightings.fulfilled) {
    return false;
  }

  return true;
}

export function getSightings(pageSize = 250) {
  return (dispatch, getState) => {
    if (shouldFetchSightings(getState(), pageSize)) {
      return dispatch(fetchSightings(pageSize));
    }
  };
}
