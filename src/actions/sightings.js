import { CALL_API } from 'redux-api-middleware';

export const SIGHTINGS_REQUEST = 'api:/sightings/REQUEST';
export const SIGHTINGS_RECEIVE = 'api:/sightings/RECEIVE';
export const SIGHTINGS_ERROR = 'api:/sightings/ERROR';

function fetchSightings() {
  return {
    [CALL_API]: {
      endpoint: `https://api.keadatabase.nz/sightings/sightings/?ordering=-date_sighted,-time_sighted`,
      method: 'GET',
      types: [
        {
          type: SIGHTINGS_REQUEST
        },
        {
          type: SIGHTINGS_RECEIVE
        },
        {
          type: SIGHTINGS_ERROR
        }
      ]
    }
  }
}

function shouldFetchSightings(state) {
  // TODO: optimise
  const sightingsReducer = state.sightingsReducer;

  if (sightingsReducer.items.length === 0) {
    return true;
  }

  return false;
}

export function fetchSightingsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchSightings(getState())) {
      return dispatch(fetchSightings());
    }
  }
}
