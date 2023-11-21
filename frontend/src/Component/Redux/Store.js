import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'
import { products_reducer } from './Reducer';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(products_reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
  export default store