import { RSAA } from 'redux-api-middleware';

export const BIRDSIGHTINGS_REQUEST = 'birdSightings/REQUEST';
export const BIRDSIGHTINGS_RECEIVE = 'birdSightings/RECEIVE';
export const BIRDSIGHTINGS_ERROR = 'birdSightings/ERROR';

function fetchBirdSightings(id) {
  const query = id ? `?sighting=${id}&has_bird=1` : '?has_bird=2&page_size=5';
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

  if (birdSightings.fulfilled) {
    if (id) return true;
    return false;
  }

  return true;
}

export function getBirdSightings(id = '') {
  return (dispatch, getState) => {
    if (shouldFetchBirdSightings(getState(), id)) {
      return dispatch(fetchBirdSightings(id));
    }
  };
}
