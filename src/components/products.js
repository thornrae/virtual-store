import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

// import {displayProducts} from '../store/products.js';
// import {selectCategory} from '../store/categories.js';
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
  const categoryReducer = useSelector( (state) => state.products.activeCategories)

  function cartAdd(item) {
    dispatch ( addToCart(item));
  }

  return (
    <>
    {categoryReducer.map(val => (
        <>
        <h2>{val.categoryName} </h2>
        <p>{val.description}</p>
        </>
      ))}

<Grid container className={classes.grid} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
        {selectedProducts.map(product => (
          

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://source.unsplash.com/random?${product.name}`}
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



// function Product() {



//   return (
//     <>
//       {filteredDescription.map(val => (
//         <>
//         <h2>Current Category: </h2>
//         <li>{val.description}</li>
//         </>
//       ))}

//     <h3>Products:</h3>
//       {filteredProducts.map(product => (
//           <li key={product.name}> {product.name}</li>
//       ))}

      
//     </>

//     )
// }

// export default Product;