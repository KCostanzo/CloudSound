import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer.js';

const configureStore = () => (
  createStore(rootReducer, applyMiddleware(thunk, logger))
);

// console.log(configureStore);
export default configureStore;
