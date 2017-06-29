import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const middleware = [ thunk ];

  return createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
}
