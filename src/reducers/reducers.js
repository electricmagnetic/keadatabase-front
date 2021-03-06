import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import bandCombos from './bandCombos';
import { reportObservationOptions, reportObservationPost } from './reportObservation';

export default combineReducers({
  bandCombos,
  reportObservationOptions,
  reportObservationPost,
  router: routerReducer,
});
