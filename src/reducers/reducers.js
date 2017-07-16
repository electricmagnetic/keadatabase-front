import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import birdsReducer from './birds';
import pagesReducer from './pages';
import postsReducer from './posts';
import bandCombosReducer from './bandCombos';
import sightingsReducer from './sightings';

export default combineReducers({
  bandCombosReducer,
  birdsReducer,
  pagesReducer,
  postsReducer,
  sightingsReducer,
  form: formReducer
});
