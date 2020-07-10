import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import bandCombos from './bandCombos';
import { reportSightingOptions, reportSightingPost } from './reportSighting';

export default combineReducers({
  bandCombos,
  reportSightingOptions,
  reportSightingPost,
  router: routerReducer,
});
