import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import {showCartItems} from '../store/cart.js';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "2em"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));




function Header() {

  const dispatch = useDispatch();

  const cartReducer = useSelector( (state) => state.cart.items);
  console.log('cartReducer.length', cartReducer.length)

  console.log('cart reducer in header', cartReducer);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Plants and Pots
          </Typography>
          <Button color="inherit">Cart: {cartReducer.length}
          </Button>
        </Toolbar>
      </AppBar>
    </div>

  )
}

export default Header;

