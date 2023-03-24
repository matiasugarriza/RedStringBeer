import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'

const CartItem = ({ product }) => {
  const { deleteItem } = useCartContext()
  return (
    <div className='itemCart'>
        <div className='itemDetail'>
        <div>
          <img src={product.thumbnail} alt={product.name} className='productThumbnail'></img>
        </div>
        <div className='productData'>
          <h2>{product.name}</h2>
          <h5>Categoría: {product.category}</h5>
          <span>{product.description}</span>
          <h5>Precio: ${product.price}</h5>
          <h5>Cantidad: {product.quantity}</h5>
          <h4>Subtotal: ${product.quantity * product.price}</h4>
          <button onClick={() => deleteItem(product.id)} className='countBtn btn'>Eliminar</button>            
        </div>
        </div>
    </div>
  )
}

export default CartItem