import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectCategory} from '../store/products.js';

function Categories (props) {

  const dispatch = useDispatch();
  
  const categoryState = useSelector( (state) => state.products.categories)
  console.log('categoryState: ', categoryState);

  

  // function chooseOne() {
  //   dispatch( selectCategory );
  // }

  function select(name) {
    dispatch ( selectCategory(name) )
  }
  

  return (
  <>
    {categoryState.map(category => (
  <>
    <button key={category._id}onClick={ () => select(`${category.categoryName}`)}>{category.categoryName}</button>
  </>
    ))}
</>
);
}

export default Categories;
