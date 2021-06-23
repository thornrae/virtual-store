import React, {useEffect} from 'react';

import {useSelector} from 'react-redux';

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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
  const classes = useStyles();

    // const dispatch = useDispatch();
  const productReducer = useSelector( (state) => state.products)
  const selectedCategory = useSelector( (state) => state.categories.selectedCategory)

  const categoryReducer = useSelector( (state) => state.categories)

  const filteredProducts = productReducer.products.filter(product => product.category === selectedCategory);

  console.log('filtered products', filteredProducts)

  const filteredDescription = categoryReducer.categories.filter(desc => desc.name === selectedCategory )

  return (
    

<Grid container className={classes.grid} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
        {filteredProducts.map(product => (
          

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random?plant"
          title="Random Plant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <li key={product.name}> {product.name}</li>
      
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    ))}


        </Grid>
      </Grid>
    </Grid> 

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