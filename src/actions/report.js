import { CALL_API } from 'redux-api-middleware';

export const REPORTSIGHTING_POST = 'api:/report/sighting/POST';
export const REPORTSIGHTING_SUCCESS = 'api:/report/sighting/SUCCESS';
export const REPORTSIGHTING_FAILURE = 'api:/report/sighting/FAILURE';

function formatSighting(sighting={}) {
  // Add challenge (basic spam prevention)
  sighting.challenge = 'kea';

  // Set region to 'all'. TODO: make choices available.
  sighting.region = 'all';

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
      types: [REPORTSIGHTING_POST, REPORTSIGHTING_SUCCESS, REPORTSIGHTING_FAILURE],
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}

export const REPORTSIGHTING_OPTIONS = 'api:/report/sighting/REQUEST';
export const REPORTSIGHTING_RECEIVE = 'api:/report/sighting/RECEIVE';
export const REPORTSIGHTING_ERROR = 'api:/report/sighting//ERROR';

export function getReportSightingOptions() {
  // dropdowns -- initial values?
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8000/report/sighting/`,
      method: 'OPTIONS',
      types: [REPORTSIGHTING_OPTIONS, REPORTSIGHTING_RECEIVE, REPORTSIGHTING_ERROR]
    }
  }
}
