import { BIRD_REQUEST, BIRD_RECEIVE, BIRD_ERROR } from '../actions/birds';
import { FEATUREDBIRDS_REQUEST, FEATUREDBIRDS_RECEIVE, FEATUREDBIRDS_ERROR } from '../actions/birds';

const initialBirdState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  value: {},
};

const bird = (state = initialBirdState, action) => {
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

export const birds = (state = {}, action) => {
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

const initialFeaturedBirdsState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  value: {},
};

export const featuredBirds = (state = initialFeaturedBirdsState, action) => {
  switch(action.type) {
    case FEATUREDBIRDS_REQUEST:
      return Object.assign({}, state, {
        pending: true,
        rejected: false,
        fulfilled: false
      });
    case FEATUREDBIRDS_RECEIVE:
      return Object.assign({}, state, {
        pending: false,
        rejected: false,
        fulfilled: true,
        value: action.payload
      });
    case FEATUREDBIRDS_ERROR:
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
