import { REPORTSIGHTING_OPTIONS, REPORTSIGHTING_RECEIVE, REPORTSIGHTING_ERROR } from '../actions/report';

const initialReportState = {
  isFetching: true,
  sightingOptions: {},
  nonSightingOptions: {},
  isError: false
};

const reportReducer = (state = initialReportState, action) => {
  switch (action.type) {
    case REPORTSIGHTING_OPTIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REPORTSIGHTING_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        sightingOptions: action.payload,
        isError: false
      });
    case REPORTSIGHTING_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: null,
        isError: true
      });
  default:
    return state;
  }
};

export default reportReducer;
