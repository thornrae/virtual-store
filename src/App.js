import React from 'react';
import {Provider} from 'react-redux';
import Storefront from './components/storefront.js';
import store from './store/';


function App() {
  return (
    <Provider store={store}>
    <Storefront />
    </Provider>
  );
}

export default App;
