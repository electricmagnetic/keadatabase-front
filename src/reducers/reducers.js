import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reportSightingOptions, reportSightingPost } from './reportSighting';

export default combineReducers({
  reportSightingOptions,
  reportSightingPost,
  router: routerReducer,
});
