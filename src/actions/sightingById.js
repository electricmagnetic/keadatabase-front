import { RSAA, getJSON } from 'redux-api-middleware';

import { SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR } from './sightings';

function fetchSightingById(id) {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/sightings/sightings/${id}/`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [
        SIGHTINGS_REQUEST,
        {
          type: SIGHTINGS_RECEIVE,
          // Process payload so that it doesn't break state structure
          // https://github.com/agraboso/redux-api-middleware#success-type-descriptors
          payload: (action, state, res) => {
            return getJSON(res).then(json => ({
              count: 1,
              next: null,
              previous: null,
              results: [json]
            }));
          },
        },
        SIGHTINGS_ERROR
      ]
    }
  };
}

function shouldFetchSightingById(state, id) {
  const { sightings } = state;

  if (sightings.pending) {
    return false;
  }

  if (sightings.fulfilled) {
    const found = sightings.value && sightings.value.results
      && sightings.value.results.find(sighting => sighting.id === Number(id));
    if (found) return false;
    return true;
  }

  return true;
}

export function getSightingById(id = '') {
  return (dispatch, getState) => {
    if (shouldFetchSightingById(getState(), id)) {
      return dispatch(fetchSightingById(id));
    }
  };
}
