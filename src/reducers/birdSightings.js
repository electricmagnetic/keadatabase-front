import { normalize, schema } from 'normalizr';
import merge from "lodash/merge";

import { BIRDSIGHTINGS_REQUEST, BIRDSIGHTINGS_RECEIVE, BIRDSIGHTINGS_ERROR } from '../actions/birdSightings';

const birdSightingSchema = new schema.Entity('birdSightings');

const initialBirdSightingsState = {
  bird: '',
  sighting: '',
  isFetching: false,
  entities: {},
  result: [],
  isError: false
};

const birdSightingsReducer = (state = initialBirdSightingsState, action) => {
  /* NB: all use 'initialBirdSightingsState' instead of 'state' as it is intended that state
     is always refreshed on load - otherwise there is a clash between 'sightings containing birds'
     and 'birds containing sightings' */
  switch (action.type) {
    case BIRDSIGHTINGS_REQUEST:
      return Object.assign({}, initialBirdSightingsState, {
        isFetching: true
      });
    case BIRDSIGHTINGS_RECEIVE:
      return merge({}, initialBirdSightingsState, {
        isFetching: false,
        isError: false
      }, normalize(action.payload.results, [birdSightingSchema]));
    case BIRDSIGHTINGS_ERROR:
      return Object.assign({}, initialBirdSightingsState, {
        isFetching: false,
        isError: true
      });
  default:
    return state;
  }
};

export default birdSightingsReducer;
