import { combineReducers, createStore } from 'redux';
import counterReducer from './redux/reducer/counterReducer';
import nameReducer from './redux/reducer/nameReducer';

const store = createStore(combineReducers({ counterReducer, nameReducer }));

export default store;
