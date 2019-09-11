import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import reducer from './ducks/duck.js';

export default createStore(reducer, applyMiddleware(promise));