import * as reducers from './reducers';
import {combineReducers, createStore} from 'redux';

const reducer = combineReducers(reducers);
const store = createStore(reducer);


export default store;