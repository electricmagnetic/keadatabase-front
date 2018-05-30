import { BIRD_REQUEST, BIRD_RECEIVE, BIRD_ERROR } from '../actions/bird';

const initialState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  value: {},
};

const bird = (state = initialState, action) => {
  switch(action.type) {
    case BIRD_REQUEST:
      return Object.assign({}, state, {
        pending: true,
        rejected: false,
        fulfilled: false
      });
    case BIRD_RECEIVE:
      return Object.assign({}, state, {
        pending: false,
        rejected: false,
        fulfilled: true,
        value: action.payload
      });
    case BIRD_ERROR:
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

const birds = (state = {}, action) => {
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
}

export default birds;
