import { SET_SIGHTINGS_FILTER } from '../actions/sightingsFilter';

const initialState = {};

export const sightingsFilter = (state = initialState, action) => {
  switch(action.type) {
    case SET_SIGHTINGS_FILTER:
      return action.filter;
    default:
      return state;
  }
};
