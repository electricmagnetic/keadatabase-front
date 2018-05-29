import { combineReducers } from 'redux';

import sightings from './sightings';
import bandCombos from './bandCombos';

export default combineReducers({
  sightings,
  bandCombos
});
