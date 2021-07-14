import { createStore, combineReducers, applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk'

import products from './products.js';
import cart from './cart.js';
import categ from './categories.js'

const reducers = combineReducers ({ products, cart, categ});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();