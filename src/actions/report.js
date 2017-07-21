import { CALL_API } from 'redux-api-middleware';

export const REPORTSIGHTING_REQUEST = 'api:/report/sighting/REQUEST';
export const REPORTSIGHTING_RECEIVE = 'api:/report/sighting/RECEIVE';
export const REPORTSIGHTING_ERROR = 'api:/report/sighting/ERROR';

export function postReportSighting(sighting) {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8000/report/sighting/`,
      method: 'POST',
      body: JSON.stringify(sighting),
      types: [REPORTSIGHTING_REQUEST, REPORTSIGHTING_RECEIVE, REPORTSIGHTING_ERROR],
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}
