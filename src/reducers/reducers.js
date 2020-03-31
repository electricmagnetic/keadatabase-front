import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import bandCombos from './bandCombos';
import { pages, posts } from './wordpress';
import { reportSightingOptions, reportSightingPost } from './reportSighting';

export default combineReducers({
  bandCombos,
  pages,
  posts,
  reportSightingOptions,
  reportSightingPost,
  router: routerReducer,
});
