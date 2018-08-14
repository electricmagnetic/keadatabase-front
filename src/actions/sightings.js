import { RSAA } from 'redux-api-middleware';

export const SIGHTINGS_REQUEST = 'sightings/REQUEST';
export const SIGHTINGS_RECEIVE = 'sightings/RECEIVE';
export const SIGHTINGS_ERROR = 'sightings/ERROR';

function fetchSightings({ pageSize, id }) {
  const query = `?page_size=${pageSize}&sighting=${id}`;
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/sightings/sightings/${query}`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR]
    }
  };
}

function shouldFetchSightings(state, { pageSize, id }) {
  const { sightings } = state;

  if (sightings.pending) return false;
  if (sightings.fulfilled && !id) return false;

  if (sightings.fulfilled && id) {
    const found = sightings.value && sightings.value.results
      && sightings.value.results.find(sighting => sighting.id === Number(id));
    if (found) return false;
    return true;
  }

  return true;
}

export function getSightings({ pageSize = 250, id = '' } = {}) {
  return (dispatch, getState) => {
    if (shouldFetchSightings(getState(), { pageSize, id })) {
      return dispatch(fetchSightings({ pageSize, id }));
    }
  };
}
