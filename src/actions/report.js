import { CALL_API } from 'redux-api-middleware';

export const SIGHTINGPOST_REQUEST = 'api:/report/sighting/REQUEST';
export const SIGHTINGPOST_RECEIVE = 'api:/report/sighting/RECEIVE';
export const SIGHTINGPOST_ERROR = 'api:/report/sighting/ERROR';

export function postReportSighting(sighting) {
  // Required challenge for basic spam prevention
  // should this go elsewhere?
  // sighting.challenge = 'kea';

  return {
    [CALL_API]: {
      endpoint: `http://localhost:8000/report/sighting/`,
      method: 'POST',
      body: JSON.stringify(sighting),
      types: [SIGHTINGPOST_REQUEST, SIGHTINGPOST_RECEIVE, SIGHTINGPOST_ERROR],
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
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8000/report/sighting/`,
      method: 'OPTIONS',
      types: [SIGHTINGOPTIONS_REQUEST, SIGHTINGOPTIONS_RECEIVE, SIGHTINGOPTIONS_ERROR]
    }
  }
}
