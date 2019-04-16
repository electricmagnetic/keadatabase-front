import {
  REPORT_NONSIGHTING_OPTIONS_REQUEST,
  REPORT_NONSIGHTING_OPTIONS_RECEIVE,
  REPORT_NONSIGHTING_OPTIONS_ERROR,
  REPORT_NONSIGHTING_POST_REQUEST,
  REPORT_NONSIGHTING_POST_RECEIVE,
  REPORT_NONSIGHTING_POST_ERROR,
} from '../actions/reportNonSighting';

const initialState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  value: {},
};

export const reportNonSightingOptions = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_NONSIGHTING_OPTIONS_REQUEST:
      return Object.assign({}, state, {
        pending: true,
        rejected: false,
        fulfilled: false,
      });
    case REPORT_NONSIGHTING_OPTIONS_RECEIVE:
      return Object.assign({}, state, {
        pending: false,
        rejected: false,
        fulfilled: true,
        value: action.payload,
      });
    case REPORT_NONSIGHTING_OPTIONS_ERROR:
      return Object.assign({}, state, {
        pending: false,
        rejected: true,
        fulfilled: false,
        value: action.payload,
      });
    default:
      return state;
  }
};

export const reportNonSightingPost = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_NONSIGHTING_POST_REQUEST:
      return Object.assign({}, state, {
        pending: true,
        rejected: false,
        fulfilled: false,
      });
    case REPORT_NONSIGHTING_POST_RECEIVE:
      return Object.assign({}, state, {
        pending: false,
        rejected: false,
        fulfilled: true,
        value: action.payload,
      });
    case REPORT_NONSIGHTING_POST_ERROR:
      return Object.assign({}, state, {
        pending: false,
        rejected: true,
        fulfilled: false,
        value: action.payload,
      });
    default:
      return state;
  }
};
