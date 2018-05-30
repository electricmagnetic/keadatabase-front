import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sightings from './sightings';
import bandCombos from './bandCombos';
import { pages, posts } from './wordpress';

export default combineReducers({
  sightings,
  bandCombos,
  pages,
  posts,
  router: routerReducer
});
