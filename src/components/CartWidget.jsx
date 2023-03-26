import React from 'react'
import cart from '../cart.png'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'

const CartWidget = () => {
  const { totalProducts } = useCartContext();
 
  return (
    <Link to={`/cart`} className='cartWidget' style={{textDecoration:"none"}}>
      <img src={cart} alt="cart" className='cart'/>

      <p className='cantidadArticulos'>{totalProducts() || ''}</p>
    </Link>
  )
}

export default CartWidget