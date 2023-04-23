import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ data }) => {

  return (
    <div className='itemDetail'>
      <div>
        <img src={data.thumbnail} alt={data.name} className='productThumbnail'></img>
      </div>
      <div className='productData'>
        <h2>{data.name}</h2>
        <h5>Categoría: {data.category}</h5>
        <span>{data.description}</span>
        <h4>Precio: ${data.price}</h4>
        <ItemCount data={data} initial={1} />
      </div>
    </div>
  )
}

export default ItemDetail