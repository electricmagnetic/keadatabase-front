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
export const REPORTSIGHTING_ERROR = 'api:/report/sighting/ERROR';

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

export const REPORTNONSIGHTING_POST = 'api:/report/non_sighting/POST';
export const REPORTNONSIGHTING_SUCCESS = 'api:/report/non_sighting/SUCCESS';
export const REPORTNONSIGHTING_FAILURE = 'api:/report/non_sighting/FAILURE';

function formatNonSighting(nonSighting={}) {
  // Add challenge (basic spam prevention)
  nonSighting.challenge = 'kea';

  // Set region to 'all'. TODO: make choices available.
  nonSighting.region = 'all';

  return JSON.stringify(nonSighting);
}

export function postReportNonSighting(nonSighting) {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8000/report/non_sighting/`,
      method: 'POST',
      body: formatNonSighting(nonSighting),
      types: [REPORTNONSIGHTING_POST, REPORTNONSIGHTING_SUCCESS, REPORTNONSIGHTING_FAILURE],
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}

export const REPORTNONSIGHTING_OPTIONS = 'api:/report/non_sighting/REQUEST';
export const REPORTNONSIGHTING_RECEIVE = 'api:/report/non_sighting/RECEIVE';
export const REPORTNONSIGHTING_ERROR = 'api:/report/non_sighting/ERROR';

export function getReportNonSightingOptions() {
  // dropdowns -- initial values?
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8000/report/non_sighting/`,
      method: 'OPTIONS',
      types: [REPORTNONSIGHTING_OPTIONS, REPORTNONSIGHTING_RECEIVE, REPORTNONSIGHTING_ERROR]
    }
  }
}
