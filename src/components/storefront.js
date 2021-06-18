import React from 'react';
import Header from './header.js';
import Categories from './categories.js';
import CurrentCategory from './current-category.js';
import Product from './products.js';
import Footer from './footer.js';



function Storefront () {
  return (
    <>
    <Header />
    <Categories />
    <CurrentCategory />
    <Product />
    <Footer />
    
    </>
  )
}

export default Storefront;