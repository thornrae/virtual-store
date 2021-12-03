import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import Grid from '@material-ui/core/Grid'; 

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {addToCart} from '../store/cart.js';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "2em"
  },
  media: {
    height: 140,
    
  },
  
  grid: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  // control: {
  //   padding: theme.spacing(2),
  // },
});

export default function MediaCard() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const selectedProducts = useSelector( (state) => state.products.activeProducts)
  console.log('selectedproducts', selectedProducts);
  const categories = useSelector( (state) => state.categ.categories)
  console.log('categories', categories)
  const activeCat = useSelector( (state) => state.categ.activeCategory)
  console.log('activeCat', activeCat)
  // console.log(description)


  // const filteredProducts = selectedProducts.filter(product => product.name === activeCat.categoryName)

  


  function cartAdd(item) {
    dispatch ( addToCart(item));
  }

  return (
<>

      {/* <>
        <h2>{name} </h2>
        <p>{description}</p>
      </> */}


<Grid container className={classes.grid} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
        {selectedProducts.map(product => (
          

<Card key={product._id}className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.imageUrl}
          title="Random Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             {product.name}
      
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => cartAdd(product)}>
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          {product.price}
        </Button>
      </CardActions>
    </Card>
    ))}
        </Grid>
      </Grid>
    </Grid> 
</>
  );
}