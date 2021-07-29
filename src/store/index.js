import { createStore, compose, applyMiddleware } from 'redux';

// import locaux
import reducer from '../store/reducer';
import logMiddleware from './logMiddleware';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;