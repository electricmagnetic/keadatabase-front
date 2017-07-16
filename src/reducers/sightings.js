import { SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR } from '../actions/sightings.js';

const initialPagesState = {
  isFetching: false,
  items: [],
  isError: false
};

const sightingsReducer = (state = initialPagesState, action) => {
  switch (action.type) {
    case SIGHTINGS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case SIGHTINGS_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload.results,
        isError: false
      });
    case SIGHTINGS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: null,
        isError: true
      });
  default:
    return state;
  }
};

export default sightingsReducer;
