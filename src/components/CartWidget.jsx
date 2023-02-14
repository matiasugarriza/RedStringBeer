import React from 'react'
import cart from '../cart.png'

const CartWidget = () => {
  return (
    <div className='cartWidget'>
      <img src={cart} alt="cart" className='cart'/>
      <p className='cantidadArticulos'>10</p>
    </div>
  )
}

export default CartWidget