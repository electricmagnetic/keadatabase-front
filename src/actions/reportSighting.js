import { RSAA } from 'redux-api-middleware';
import { push } from 'react-router-redux';

import { formatSighting } from './helpers/formatSighting';

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
};

export const REPORT_SIGHTING_POST_REQUEST = 'reportSighting/post/REQUEST';
export const REPORT_SIGHTING_POST_RECEIVE = 'reportSighting/post/RECEIVE';
export const REPORT_SIGHTING_POST_ERROR = 'reportSighting/post/ERROR';

export function postReportSighting(values, formikBag) {
  // Returning thunk to dispatch multiple actions
  return async(dispatch, getState) => {
    const response = await dispatch({
      [RSAA]: {
        endpoint: `http://localhost:8000/report/sighting/`,
        method: 'POST',
        body: formatSighting(values),
        types: [REPORT_SIGHTING_POST_REQUEST, REPORT_SIGHTING_POST_RECEIVE, REPORT_SIGHTING_POST_ERROR],
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    });
    formikBag.setSubmitting(false);

    // Use response to dispatch further actions
    console.log(response)
    if (response.error) {
      console.log(response.payload.response)
      formikBag.setErrors(response.payload.response);
    } else {
      const id = response.id || '';
      dispatch(push(`/report/sighting/success/${id}`));
    }
    return response;
  }
};
