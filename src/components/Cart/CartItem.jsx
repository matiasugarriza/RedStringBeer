import React from 'react'
import { useCartContext } from './CartContext'
import ItemCount from '../Items/ItemCount'

const CartItem = ({ product }) => {
  const { deleteItem } = useCartContext()
  return (
    <div className='itemCart'>
        <div className='itemCartDetail'>
        <img src={product.thumbnail} alt={product.name} className='productThumbnail'></img>
        <div className='productData'>
          <h3>{product.name}</h3>
          <h5>Categoría: {product.category}</h5>
          <h5>Precio: ${product.price}</h5>
          <h5>Cantidad: {product.quantity}</h5>
          <h4>Subtotal: ${product.quantity * product.price}</h4>
          <ItemCount data={product} initial={product.quantity} />
          <button onClick={() => deleteItem(product.id)} className='countBtn btn deleteItem'>Eliminar</button>            
        </div>
        </div>
    </div>
  )
}

export default CartItem