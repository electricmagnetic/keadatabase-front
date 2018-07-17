import {
  REPORT_SIGHTING_OPTIONS_REQUEST,
  REPORT_SIGHTING_OPTIONS_RECEIVE,
  REPORT_SIGHTING_OPTIONS_ERROR,
} from '../actions/reportSighting';

const initialState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  value: {},
};

export const reportSightingOption = (state = initialState, action) => {
  switch(action.type) {
    case REPORT_SIGHTING_OPTIONS_REQUEST:
      return Object.assign({}, state, {
        pending: true,
        rejected: false,
        fulfilled: false
      });
    case REPORT_SIGHTING_OPTIONS_RECEIVE:
      return Object.assign({}, state, {
        pending: false,
        rejected: false,
        fulfilled: true,
        value: action.payload
      });
    case REPORT_SIGHTING_OPTIONS_ERROR:
      return Object.assign({}, state, {
        pending: false,
        rejected: true,
        fulfilled: false,
        value: action.payload
      });
  default:
    return state;
  }
};
