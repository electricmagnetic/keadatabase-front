import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import birdsReducer from './birds';
import pagesReducer from './pages';
import postsReducer from './posts';
import bandCombosReducer from './bandCombos';
import sightingsReducer from './sightings';
import birdSightingsReducer from './birdSightings';

export default combineReducers({
  bandCombosReducer,
  birdsReducer,
  pagesReducer,
  postsReducer,
  sightingsReducer,
  birdSightingsReducer,
  router: routerReducer,
  form: formReducer,
});
