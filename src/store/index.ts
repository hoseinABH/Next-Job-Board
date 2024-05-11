import { createStore, applyMiddleware, compose } from 'redux';
// Reducers
import reducers from './index.reducer';
// Sagas
import sagas from './index.sagas';
// List of middleware
import middlewares, { sagaMiddleware } from './index.middleware';
// Utilities
import { isDevelopment } from '@/lib/env';
import { isServer } from '@/lib/common';
// Actions
import AuthActions from './Auth/auth.actions';

/**
 * Running redux-devtools composer or if it doesn't installed on user's browser then we will use redux native composer function
 */
const composeEnhancer =
  (isDevelopment() && !isServer()
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
// Create store and also apply all middleware such as Redux-devtools and redux-saga and redux-logger in this project
const appStore = createStore(reducers, {}, composeEnhancer(applyMiddleware(...middlewares)));
// Run redux-saga middleware and apply all forked sagas that we have created
sagaMiddleware.run(sagas);

if (!isServer()) {
  window.addEventListener('unauthorizedError', () => {
    // run refresh token strategy
  });
}

export default appStore;

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
