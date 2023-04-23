import React, { useState } from 'react'
import { useCartContext } from '../Cart/CartContext'



const ItemCount = ({data, initial}) => {
    const { addToCart, cartList, deleteItem } = useCartContext()
    const [Qty, setQty] = useState(initial)
    const addProduct = (num) => {
        setQty(Qty + num);
      };
    const isInCart = cartList.find(product => product.id === data.id) ? true:false;
  return (
    <div className='AddToCart'>
        <div className='ItemCount'>
            <button 
                className='countBtn btn'
                onClick={() => addProduct(-1)}
                disabled={Qty === 1}
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
            {isInCart==true ? "Modificar Carrito" : "Agregar al Carrito"}
        </button>
    </div>
  )
}

export default ItemCount