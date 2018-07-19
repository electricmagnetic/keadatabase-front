import { RSAA } from 'redux-api-middleware';
import moment from 'moment';

export const REPORT_SIGHTING_OPTIONS_REQUEST = 'reportSighting/options/REQUEST';
export const REPORT_SIGHTING_OPTIONS_RECEIVE = 'reportSighting/options/RECEIVE';
export const REPORT_SIGHTING_OPTIONS_ERROR = 'reportSighting/options/ERROR';

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

export const REPORT_SIGHTING_POST_REQUEST = 'reportSighting/post/REQUEST';
export const REPORT_SIGHTING_POST_RECEIVE = 'reportSighting/post/RECEIVE';
export const REPORT_SIGHTING_POST_ERROR = 'reportSighting/post/ERROR';

function formatSighting(sighting={}) {
  // Add challenge (basic spam prevention)
  sighting.challenge = 'kea';

  // Format date and time sighted
  if (sighting.dateTimeSighted) {
    sighting.date_sighted = moment(sighting.dateTimeSighted).format('YYYY-MM-DD');
    sighting.time_sighted = moment(sighting.dateTimeSighted).format('HH:mm');
  }

  // Format coordinates into numbers with 'Point' type
  if (sighting.point_location) {
    sighting.point_location.type = 'Point';
    sighting.point_location.coordinates = sighting.point_location.coordinates.map(parseFloat);
  }

  // Add empty sighting.birds if none defined as back-end requires it to be at least defined
  if (!sighting.birds) {
    sighting.birds = [];
  }

  // For 'sighted' sighting_type only (where number field is not defined), get length of array for number
  if (sighting.sighting_type) {
    if (sighting.sighting_type === 'sighted') {
      sighting.number = sighting.birds.length;
    }
  }

  console.log(sighting)
  return JSON.stringify(sighting);
};

export function postReportSighting(sighting) {
  return {
    [RSAA]: {
      endpoint: `http://localhost:8000/report/sighting/`,
      method: 'POST',
      body: formatSighting(sighting),
      types: [REPORT_SIGHTING_POST_REQUEST, REPORT_SIGHTING_POST_RECEIVE, REPORT_SIGHTING_POST_ERROR],
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
};
