import React from 'react'
import cart from '../cart.png'
import { useCartContext } from './CartContext'

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div className='cartWidget'>
      <img src={cart} alt="cart" className='cart'/>
      <p className='cantidadArticulos'>{totalProducts() || '0'}</p>
    </div>
  )
}

export default CartWidget