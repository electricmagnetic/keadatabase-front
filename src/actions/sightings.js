import { RSAA } from 'redux-api-middleware';

export const SIGHTINGS_REQUEST = 'sightings/REQUEST';
export const SIGHTINGS_RECEIVE = 'sightings/RECEIVE';
export const SIGHTINGS_ERROR = 'sightings/ERROR';

function fetchSightings() {
  return {
    [RSAA]: {
      endpoint: `${process.env.REACT_APP_API_BASE}/sightings/sightings/?page_size=250`,
      method: 'GET',
      headers: { Accept: 'application/json' },
      types: [SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR],
    },
  };
}

function shouldFetchSightings(state) {
  const { sightings } = state;

  if (sightings.pending) {
    return false;
  }

  return true;
}

export function getSightings() {
  return (dispatch, getState) => {
    if (shouldFetchSightings(getState())) {
      return dispatch(fetchSightings());
    }
  };
}
