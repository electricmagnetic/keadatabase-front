import { RSAA } from 'redux-api-middleware';

export const REPORT_SIGHTING_OPTIONS_REQUEST = 'reportSighting/getOption/REQUEST';
export const REPORT_SIGHTING_OPTIONS_RECEIVE = 'reportSighting/getOption/RECEIVE';
export const REPORT_SIGHTING_OPTIONS_ERROR = 'reportSighting/getOption/ERROR';

export function getReportSightingOptions() {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/report/sighting/`,
      method: 'OPTIONS',
      headers: { 'Accept': 'application/json' },
      types: [REPORT_SIGHTING_OPTIONS_REQUEST, REPORT_SIGHTING_OPTIONS_RECEIVE, REPORT_SIGHTING_OPTIONS_ERROR]
    }
  }
}
