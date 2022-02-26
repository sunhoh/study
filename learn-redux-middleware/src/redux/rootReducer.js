import { combineReducers } from 'redux';
import counter from './modules/counter';
import posts from './modules/post';

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;
