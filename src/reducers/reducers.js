import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { REQUEST_BANDCOMBOS, RECEIVE_BANDCOMBOS } from '../actions/bandcombos.js';
import { REQUEST_BIRD, RECEIVE_BIRD } from '../actions/birds.js'
import { REQUEST_PAGES, RECEIVE_PAGES } from '../actions/pages.js';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/posts.js';

const initialBandCombosState = {
  isFetching: false,
  items: []
};

const bandcombosStore = (state = initialBandCombosState, action) => {
  switch (action.type) {
    case REQUEST_BANDCOMBOS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_BANDCOMBOS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.bandcombos,
        lastUpdated: action.receivedAt
      });
  default:
    return state;
  }
};

const initialBirdState = {
  isFetching: false,
  item: {}
};

function bird(state = initialBirdState, action) {
  switch (action.type) {
    case REQUEST_BIRD:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_BIRD:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.item,
        lastUpdated: action.receivedAt
      });
  default:
    return state;
  }
};

const birdsStore = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_BIRD:
    case RECEIVE_BIRD:
      return Object.assign({}, state, {
        [action.slug]: bird(state[action.slug], action)
      });
  default:
    return state;
  }
};

const initialPagesState = {
  isFetching: false,
  items: []
};

const pagesStore = (state = initialPagesState, action) => {
  switch (action.type) {
    case REQUEST_PAGES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PAGES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.pages,
        lastUpdated: action.receivedAt
      });
  default:
    return state;
  }
};

const initialPostsState = {
  isFetching: false,
  items: []
};

const postsStore = (state = initialPostsState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
  default:
    return state;
  }
};

export default combineReducers({
  bandcombosStore,
  birdsStore,
  pagesStore,
  postsStore,
  form: formReducer
});
