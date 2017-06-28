import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducers';

export default function configureStore() {
  const middleware = [ thunk ];

  return createStore(
    reducers,
    compose(
      applyMiddleware(...middleware),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
