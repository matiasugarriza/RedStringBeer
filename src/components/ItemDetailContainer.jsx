import React from 'react'
import { Link, useParams } from 'react-router-dom'

import ItemCount from './ItemCount'
import data from '../data/data'


const ItemDetailContainer = () => {
    const { productId } = useParams()
    const thisProduct = data.find((product) => product.id === productId)
  return (
    <>
      <div className='itemDetail'>    
        <div>
          <img src={thisProduct.thumbnail} alt={thisProduct.name} className='productThumbnail'></img>
        </div>
        <div className='productData'>
          <h2>{thisProduct.name}</h2>
          <h5>Categoría: {thisProduct.category}</h5>
          <span>{thisProduct.description}</span>
          <h4>Precio: ${thisProduct.price}</h4>
          <ItemCount />
        </div>
      </div>
      <Link to={`/products`}className='countBtn btn btnVolver'>Volver</Link>
    </>
  );
}

export default ItemDetailContainer