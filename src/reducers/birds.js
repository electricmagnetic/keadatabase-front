import { BIRD_REQUEST, BIRD_RECEIVE, BIRD_ERROR } from '../actions/birds';

const initialBirdState = {
  isFetching: false,
  item: {},
  isError: false
};

function bird(state = initialBirdState, action) {
  switch (action.type) {
    case BIRD_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case BIRD_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.payload,
        isError: false
      });
    case BIRD_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        item: null,
        isError: true
      });
  default:
    return state;
  }
}

const birdsReducer = (state = {}, action) => {
  switch (action.type) {
    case BIRD_REQUEST:
    case BIRD_RECEIVE:
    case BIRD_ERROR:
      return Object.assign({}, state, {
        [action.meta.slug]: bird(state[action.meta.slug], action)
      });
  default:
    return state;
  }
};

export default birdsReducer;
