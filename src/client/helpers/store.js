import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import ipAddress from '../reducers/ipAddress';

const loggerMiddleware = createLogger();

export const store = createStore(
  ipAddress,
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
);

export default store;
