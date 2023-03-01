import React from 'react'
import { useParams } from 'react-router-dom'

import ItemCount from './ItemCount'
import data from '../data/data'


const ItemDetailContainer = () => {
    const { productId } = useParams()
    const thisProduct = data.find((product) => product.id === productId)
  
  return (
    <div className='itemDetail'>    
      <div className='productThumbnail'>
        <img src={thisProduct.thumbnail} alt={thisProduct.name}></img>
      </div>
      <div className='productData'>
        <h2>{thisProduct.name}</h2>
        <p>Precio: ${thisProduct.price}</p>
        <ItemCount />
      </div>
      <button className='countBtn btn'>Volver</button>
    </div>
  );
}

export default ItemDetailContainer