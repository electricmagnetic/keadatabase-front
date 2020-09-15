import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reportObservationOptions, reportObservationPost } from './reportObservation';

export default combineReducers({
  reportObservationOptions,
  reportObservationPost,
  router: routerReducer,
});
