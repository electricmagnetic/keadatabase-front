import { REPORTSIGHTING_OPTIONS, REPORTSIGHTING_RECEIVE, REPORTSIGHTING_ERROR } from '../actions/report';
import { REPORTNONSIGHTING_OPTIONS, REPORTNONSIGHTING_RECEIVE, REPORTNONSIGHTING_ERROR } from '../actions/report';

const initialReportState = {
  isFetching: false,
  sightingOptions: null,
  nonSightingOptions: null,
  isError: false
};

const reportReducer = (state = initialReportState, action) => {
  switch (action.type) {
    case REPORTSIGHTING_OPTIONS:
    case REPORTNONSIGHTING_OPTIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REPORTSIGHTING_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        sightingOptions: action.payload,
        isError: false
      });
    case REPORTNONSIGHTING_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        nonSightingOptions: action.payload,
        isError: false
      });
    case REPORTSIGHTING_ERROR:
    case REPORTNONSIGHTING_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        sightingOptions: null,
        nonSightingOptions: null,
        isError: true
      });
  default:
    return state;
  }
};

export default reportReducer;
