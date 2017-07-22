import { CALL_API } from 'redux-api-middleware';

export const SIGHTINGPOST_POST = 'api:/report/sighting/POST';
export const SIGHTINGPOST_SUCCESS = 'api:/report/sighting/SUCCESS';
export const SIGHTINGPOST_ERROR = 'api:/report/sighting/ERROR';

function formatSighting(sighting={}) {
  // Add challenge (basic spam prevention)
  sighting.challenge = 'kea';

  // Format coordinates into numbers with 'Point' type
  if (sighting.point_location) {
    sighting.point_location.type = 'Point';
    sighting.point_location.coordinates = sighting.point_location.coordinates.map(parseFloat);
  }

  // Add empty sighting.birds if none defined as back-end requires it to be at least defined
  if (!sighting.birds) {
    sighting.birds = [];
  }

  return JSON.stringify(sighting);
}

export function postReportSighting(sighting) {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8000/report/sighting/`,
      method: 'POST',
      body: formatSighting(sighting),
      types: [SIGHTINGPOST_POST, SIGHTINGPOST_SUCCESS, SIGHTINGPOST_ERROR],
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}

export const SIGHTINGOPTIONS_REQUEST = 'api:/report/sighting/REQUEST';
export const SIGHTINGOPTIONS_RECEIVE = 'api:/report/sighting/RECEIVE';
export const SIGHTINGOPTIONS_ERROR = 'api:/report/sighting/ERROR';

export function getReportSightingOptions() {
  // dropdowns -- initial values?
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8000/report/sighting/`,
      method: 'OPTIONS',
      types: [SIGHTINGOPTIONS_REQUEST, SIGHTINGOPTIONS_RECEIVE, SIGHTINGOPTIONS_ERROR]
    }
  }
}
