import React from 'react'
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'
import CartItem from './CartItem';

const Cart = () => {
  const { cartList, totalPrice, removeList } = useCartContext();
  const order = {
    buyer: {
      name: "",
      email: "",
      phone: "",
    },
    items: cartList.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }
  const checkOut = () => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
    removeList()
    return(
    alert("Felicidades. Tu compra fue confirmada!")
      )
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
    <div className='cartView'>
      <h4 className='cartTitle'>Tu carrito:</h4>
      <div className='itemCartContainer'>
      {
        cartList.map(product => <CartItem key={product.id} product={product} /> )
      }
      </div>
      <h3 className='totalPrice'>Total: ${totalPrice()}</h3>
      <Link to={`/`} className='countBtn btn btnVolver' onClick={checkOut}>Comprar Carrito</Link>
      <button className='countBtn btn btnVolver' onClick={removeList}>Vaciar Carrito</button>
      <Link to={`/products`}className='countBtn btn btnVolver'>Volver</Link>
      
    </div>
  )

}

export default Cart