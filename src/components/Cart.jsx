import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'
import CartItem from './CartItem';

const Cart = () => {
  const { cartList, totalPrice } = useCartContext();
  if (cartList.length === 0){
    return (
      <div className='cartMessage'>
        <h3> 😱 ¡El carrito está vacío! 😱 </h3>
        <Link to='/products' className='countBtn btn'> Vamos a llenarlo. </Link>
      </div>
      )
  }
  return (
    <div>
      <h4>Tu carrito:</h4>
      {
        cartList.map(product => <CartItem key={product.id} product={product} /> )
      }
      <h3 className='totalPrice countBtn'>Total: ${totalPrice()}</h3>
      <Link to={`/products`}className='countBtn btn btnVolver'>Volver</Link>
      
    </div>
  )

}

export default Cart