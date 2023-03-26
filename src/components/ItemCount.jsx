import React, { useState } from 'react'
import { useCartContext } from './CartContext'


const ItemCount = ({data}) => {
    const { addToCart } = useCartContext()
    const initial = 1
    const [Qty, setQty] = useState(initial)
    const addProduct = (num) => {
        setQty(Qty + num);
      };
  return (
    <div className='AddToCart'>
        <div className='ItemCount'>
            <button 
                className='countBtn btn'
                onClick={() => addProduct(-1)}
                disabled={Qty === initial}
            >
            -
            </button>
            <span className='numItem'>{Qty}</span>
            <button 
                className='countBtn btn'
                onClick={() => addProduct(+1)}
                disabled={Qty === data.stock}
            >
            +
            </button>
        </div>
        <button 
        className='countBtn btn agregarCarrito'
        onClick={() => {
            addToCart(data, Qty)
          }}
          disabled={data.stock === 0 ? true : null}
          >
            Agregar al Carrito
        </button>

    </div>
  )
}

export default ItemCount