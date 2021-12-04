import React from 'react';

import Header from './header.js';
import Categories from './categories.js';
import Product from './products.js';
import Footer from './footer.js';
import Cart from './simplecart.js';

function Storefront () {

  return (
    <>
    <Header />
    <Cart />
    <Categories />
    <Product />
    <Footer />
    
    </>
  )
}

export default Storefront;

