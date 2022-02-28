import { combineReducers } from 'redux';
import bankReducers from './bankReducers'


const RootReducers = combineReducers({
    bank: bankReducers
})

export default RootReducers
export type RootState = ReturnType<typeof RootReducers>