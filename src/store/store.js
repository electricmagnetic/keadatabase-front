import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers/reducers';
import history from '../history/history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const middleware = [ thunk, apiMiddleware, routerMiddleware(history)];

  return createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
}
