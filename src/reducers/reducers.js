import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { sightings, birdSightings } from './sightings';
import bandCombos from './bandCombos';
import { pages, posts } from './wordpress';
import birds from './birds';

export default combineReducers({
  birdSightings,
  sightings,
  bandCombos,
  pages,
  posts,
  birds,
  router: routerReducer
});
