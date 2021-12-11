import { createStore, applyMiddleware } from 'redux';
// import SubscribersReducer from './subscribers/reducer';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger];
// const store = createStore(SubscribersReducer);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
