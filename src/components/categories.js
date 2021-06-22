import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectCategory} from '../store/categories.js';

function Categories (props) {

  const dispatch = useDispatch();
  
  const categoryReducer = useSelector( (state) => state.categories)
  console.log('categoryReducer', categoryReducer);


  // function chooseOne() {
  //   dispatch( selectCategory );
  // }

  function select(name) {
    dispatch ( selectCategory(name) )
  }
  

  return (
    <>
    {/* <h1>Browse Our Categories {categoryReducer.selectedCategory}</h1> */}
    <button onClick={ () => select('plants')}>Plants</button>
    <button onClick={() => select('pots')}>Pots</button>
    {/* or should these be inputs to be able to use e.target.value */}
    </>
  )
}

export default Categories;
