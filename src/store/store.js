
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './appReducers';
import usersSaga from "./sagas/fetch";
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const middleware = [thunk, sagaMiddleware];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware,logger)));

  sagaMiddleware.run(usersSaga);

  return store;
}
const store = configureStore();
export default store