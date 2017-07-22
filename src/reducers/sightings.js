import { normalize, schema } from 'normalizr';
import merge from "lodash/merge";

import { SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR } from '../actions/sightings';

const sightingSchema = new schema.Entity('sightings');

const initialSightingsState = {
  isFetching: true,
  fetchedAll: false,
  entities: {},
  result: [],
  isError: false
};

const sightingsReducer = (state = initialSightingsState, action) => {
  switch (action.type) {
    case SIGHTINGS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case SIGHTINGS_RECEIVE:
      if (action.payload.results) {
        // If getting multiple sightings
        return merge({}, state, {
          isFetching: false,
          fetchedAll: true,
          isError: false
        }, normalize(action.payload.results, [sightingSchema]));
      }
      else {
        // If getting single sighting (normalise as array of one)
        return merge({}, state, {
          isFetching: false,
          isError: false
        }, normalize([action.payload], [sightingSchema]));
      }
    case SIGHTINGS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        entities: null,
        isError: true
      });
  default:
    return state;
  }
};

export default sightingsReducer;
