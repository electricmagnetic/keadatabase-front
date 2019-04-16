import { normalize, schema } from 'normalizr';

import { PAGES_REQUEST, PAGES_RECEIVE, PAGES_ERROR } from '../actions/wordpress';
import { POSTS_REQUEST, POSTS_RECEIVE, POSTS_ERROR } from '../actions/wordpress';

const initialPagesState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  value: {},
};

export const pages = (state = initialPagesState, action) => {
  switch (action.type) {
    case PAGES_REQUEST:
      return Object.assign({}, state, {
        pending: true,
        rejected: false,
        fulfilled: false,
      });
    case PAGES_RECEIVE:
      const pageListSchema = [new schema.Entity('page')];
      const normalizedValue = normalize(action.payload, pageListSchema);

      return Object.assign({}, state, {
        pending: false,
        rejected: false,
        fulfilled: true,
        value: normalizedValue.entities,
      });
    case PAGES_ERROR:
      return Object.assign({}, state, {
        pending: false,
        rejected: true,
        fulfilled: false,
        value: action.payload,
      });
    default:
      return state;
  }
};

const initialPostsState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  value: {},
};

export const posts = (state = initialPostsState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return Object.assign({}, state, {
        pending: true,
        rejected: false,
        fulfilled: false,
      });
    case POSTS_RECEIVE:
      return Object.assign({}, state, {
        pending: false,
        rejected: false,
        fulfilled: true,
        value: action.payload,
      });
    case POSTS_ERROR:
      return Object.assign({}, state, {
        pending: false,
        rejected: true,
        fulfilled: false,
        value: action.payload,
      });
    default:
      return state;
  }
};
