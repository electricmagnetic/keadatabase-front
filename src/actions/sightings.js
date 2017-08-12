import { RSAA } from 'redux-api-middleware';

export const SIGHTINGS_REQUEST = 'api:/sightings/REQUEST';
export const SIGHTINGS_RECEIVE = 'api:/sightings/RECEIVE';
export const SIGHTINGS_ERROR = 'api:/sightings/ERROR';

function fetchSightings(id) {
  if(id) {
    return {
      [RSAA]: {
        endpoint: `https://api.keadatabase.nz/sightings/sightings/${id}/`,
        method: 'GET',
        types: [SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR]
      }
    }
  }
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/sightings/sightings/?page-size=2`,
      method: 'GET',
      types: [SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR]
    }
  }
}

function shouldFetchSightings(state, id) {
  // TODO: optimise
  const sightingsReducer = state.sightingsReducer;

  if (!sightingsReducer.entities.sightings) {
    return true;
  }

  if(id) {
    if(!sightingsReducer.entities.sightings[id]) {
      return true;
    }
  }
  else {
    if(!sightingsReducer.fetchedAll) {
      return true;
    }
  }

  return false;
}

export function fetchSightingsIfNeeded(id='') {
  return (dispatch, getState) => {
    if (shouldFetchSightings(getState(), id)) {
      return dispatch(fetchSightings(id));
    }
  }
}
