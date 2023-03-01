import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/data'

const ItemCount = ({stock, initial, onAdd}) => {
    const { productId } = useParams()
    const thisProduct = data.find((product) => product.id === productId)
    initial = 1
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
                disabled={Qty === thisProduct.stock}
            >
            +
            </button>
        </div>
        <button 
        className='countBtn btn agregarCarrito'
        onClick={() => {
            onAdd(Qty);
          }}
          disabled={stock === 0 ? true : null}
          >
            Agregar al Carrito
        </button>
    </div>
  )
}

export default ItemCount