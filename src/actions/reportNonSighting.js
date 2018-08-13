import { RSAA } from 'redux-api-middleware';
import { push } from 'react-router-redux';

import { formatNonSighting } from './helpers/formatNonSighting';

export const REPORT_NONSIGHTING_OPTIONS_REQUEST = 'reportNonSighting/options/REQUEST';
export const REPORT_NONSIGHTING_OPTIONS_RECEIVE = 'reportNonSighting/options/RECEIVE';
export const REPORT_NONSIGHTING_OPTIONS_ERROR = 'reportNonSighting/options/ERROR';

export function getReportNonSightingOptions() {
  return {
    [RSAA]: {
      endpoint: `https://api.keadatabase.nz/report/non_sighting/`,
      method: 'OPTIONS',
      headers: { 'Accept': 'application/json' },
      types: [REPORT_NONSIGHTING_OPTIONS_REQUEST, REPORT_NONSIGHTING_OPTIONS_RECEIVE, REPORT_NONSIGHTING_OPTIONS_ERROR]
    }
  };
};

export const REPORT_NONSIGHTING_POST_REQUEST = 'reportNonSighting/post/REQUEST';
export const REPORT_NONSIGHTING_POST_RECEIVE = 'reportNonSighting/post/RECEIVE';
export const REPORT_NONSIGHTING_POST_ERROR = 'reportNonSighting/post/ERROR';

export function postReportNonSighting(values, formikBag) {
  // Returning thunk to dispatch multiple actions
  return async(dispatch, getState) => {
    const response = await dispatch({
      [RSAA]: {
        endpoint: `https://api.keadatabase.nz/report/non_sighting/`,
        method: 'POST',
        body: formatNonSighting(values),
        types: [REPORT_NONSIGHTING_POST_REQUEST, REPORT_NONSIGHTING_POST_RECEIVE, REPORT_NONSIGHTING_POST_ERROR],
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    });
    formikBag.setSubmitting(false);

    // Use response to dispatch further actions
    if (response.error) {
      // Receiving error doesn't dispatch REPORT_NONSIGHTING_POST_ERROR somehow so dispatch it here
      dispatch({ type: REPORT_NONSIGHTING_POST_ERROR, payload: response.payload });
    } else {
      dispatch(push(`/report/non-sighting/success/`));
    }
    return response;
  };
};
