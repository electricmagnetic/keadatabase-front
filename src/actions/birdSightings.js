import { RSAA } from 'redux-api-middleware';

export const BIRDSIGHTINGS_REQUEST = 'api:/bird_sightings/REQUEST';
export const BIRDSIGHTINGS_RECEIVE = 'api:/bird_sightings/RECEIVE';
export const BIRDSIGHTINGS_ERROR = 'api:/bird_sightings/ERROR';

function fetchBirdSightings(sighting, bird) {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/sightings/birds/?sighting=${sighting}&bird=${bird}`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      types: [BIRDSIGHTINGS_REQUEST, BIRDSIGHTINGS_RECEIVE, BIRDSIGHTINGS_ERROR]
    }
  }
}

function shouldFetchBirdSightings(state, sighting, bird) {
  // TODO: optimise
  return true;
}

export function fetchBirdSightingsIfNeeded(sighting='', bird='') {
  return (dispatch, getState) => {
    if (shouldFetchBirdSightings(getState(), sighting, bird)) {
      return dispatch(fetchBirdSightings(sighting, bird));
    }
  }
}
