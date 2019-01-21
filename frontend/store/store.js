import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = (defaultState={}) => {
  return createStore(rootReducer, defaultState, applyMiddleware(thunk, logger));
};

export default configureStore;