import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { sightings } from './sightings';
import { birdSightings } from './birdSightings';
import bandCombos from './bandCombos';
import { pages, posts } from './wordpress';
import { birds, featuredBirds } from './birds';

export default combineReducers({
  birdSightings,
  sightings,
  bandCombos,
  pages,
  posts,
  birds,
  featuredBirds,
  router: routerReducer
});
