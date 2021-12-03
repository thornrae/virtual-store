import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getCategories, select} from '../store/categories.js';
import {getProducts} from '../store/products.js';

function Categories (props) {

  const dispatch = useDispatch();
  
  const categoryState = useSelector( (state) => state.categ.categories)
  // console.log('categoryState: ', categoryState);

  // function select(name) {
  //   dispatch ( selectCategory(name) )
  // }

  useEffect( () => {

    dispatch (getCategories() )

  }, [dispatch])

  function sel(payload) {
    console.log('payload in sel, cat comp', payload)
    dispatch( select(payload.categoryName) )
    dispatch( getProducts(payload))
  }


  // console.log(categoryState);

  return (
  <>
    {categoryState.map(category => (
      // <button key={category._id}onClick={ () => select(`${category.categoryName}`)}
    <button key={category._id} onClick={ () => sel(category)}>
      {category.categoryName}</button>
    ))}
</>
);
}

export default Categories;
