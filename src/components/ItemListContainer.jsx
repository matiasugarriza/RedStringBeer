import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
  return (
    <div className='row ItemCount' style={{
      textAlign:'center',
      margin:'2vw'
    }}>
      <ItemList />
    </div>
  )
}

export default ItemListContainer