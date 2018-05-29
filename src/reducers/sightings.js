import { SIGHTINGS_REQUEST, SIGHTINGS_RECEIVE, SIGHTINGS_ERROR } from '../actions/sightings';

const initialState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  value: {},
};

const sightings = (state = initialState, action) => {
  console.log(action)

  switch(action.type) {
    case SIGHTINGS_REQUEST:
      return Object.assign({}, state, {
        pending: true,
        rejected: false,
        fulfilled: false
      });
    case SIGHTINGS_RECEIVE:
      return Object.assign({}, state, {
        pending: false,
        rejected: false,
        fulfilled: true,
        value: action.payload
      });
    case SIGHTINGS_ERROR:
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

export default sightings;
