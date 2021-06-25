import React from 'react';

import {useSelector} from 'react-redux';

function Cart () {

  const cartReducer = useSelector((state) => state.cart.items)
  console.log(cartReducer);
  return (
    <>
    {cartReducer.map(item => (
    <h3>Cart: {item.name}</h3>
    ))}
    </>
    
  )
}

export default Cart;