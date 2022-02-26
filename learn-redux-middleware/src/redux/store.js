import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
// import myLogger from './middlewares/myLogger'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const middleware = applyMiddleware(ReduxThunk, logger)

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;

