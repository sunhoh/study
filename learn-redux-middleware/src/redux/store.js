import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
// import myLogger from './middlewares/myLogger'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history'

export const customHistory = createBrowserHistory();

const middleware = applyMiddleware(
    ReduxThunk.withExtraArgument({history: customHistory}), 
    logger
    )

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;

