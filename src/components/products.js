import React, {useEffect} from 'react';

import {useSelector} from 'react-redux';

import {displayProducts} from '../store/products.js';
import {selectCategory} from '../store/categories.js';


function Product() {

  // const dispatch = useDispatch();
  const productReducer = useSelector( (state) => state.products)
  const selectedCategory = useSelector( (state) => state.categories.selectedCategory)

  const categoryReducer = useSelector( (state) => state.categories)


  // useEffect( () => {
  //   dispatch( displayProducts() )
  // }, [])

  // if(products.name === payload) {
  const filteredProducts = productReducer.products.filter(product => product.category === selectedCategory);

  console.log('filtered products', filteredProducts)

  //based on the current on the selected category and then just render that category.description

  const filteredDescription = categoryReducer.categories.filter(desc => desc.name === selectedCategory )

  return (
    <>
    <h2>Current Category: </h2>
    
    <p>
      {filteredDescription.map(val => (
        <li>{val.description}</li>
      ))}
    </p>
    {/* if statement to say if empty do not render */}
    <h3>Products:</h3>
      {filteredProducts.map(product => (
          <li> {product.name}</li>
      ))}
    </>

    )
}

export default Product;