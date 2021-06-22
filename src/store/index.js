import { createStore, combineReducers} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import products from './products.js';
import categories from './categories.js';

const reducers = combineReducers ({ categories, products});

const store = () => {
  return createStore(reducers, composeWithDevTools())
}

export default store();