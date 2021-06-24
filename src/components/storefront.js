import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from './header.js';
import Categories from './categories.js';
import Product from './products.js';
import Footer from './footer.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Storefront () {

  return (
    <>
    <Header />
    <Categories />

    <Product />

    <Footer />
    
    </>
  )
}

export default Storefront;

