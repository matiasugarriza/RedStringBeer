import React from 'react'
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'
import CartItem from './CartItem';

const Cart = () => {
  const { cartList, totalPrice } = useCartContext();
  const order = {
    buyer: {
      name: "",
      email: "",
      phone: "",
    },
    items: cartList.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }
  const handleClick = () => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
  }

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
      <button className='countBtn Btn' onClick={handleClick}>Comprar Carrito</button>
      <Link to={`/products`}className='countBtn btn btnVolver'>Volver</Link>
      
    </div>
  )

}

export default Cart