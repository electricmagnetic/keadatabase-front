import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sightings from './sightings';
import bandCombos from './bandCombos';

export default combineReducers({
  sightings,
  bandCombos,
  router: routerReducer
});
