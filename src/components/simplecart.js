import React from 'react';

import {useSelector} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  accordion: {
    width: "8em",
    // position: "fixed",
    marginBottom: "2em", 
    // display: "flex",
    float: "right",
  },

  // one: {
  //   marginRight: "auto",
  // },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


function Cart () {

  const cartReducer = useSelector((state) => state.cart.items)
  const classes = useStyles();
  return (

    <div className={classes.accordion}>
            {cartReducer.map(cartItem => ( 
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
          <Typography className={classes.heading}>{cartItem.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {cartItem.description} {cartItem.price}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  )
}

export default Cart;
