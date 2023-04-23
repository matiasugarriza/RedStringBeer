import React from 'react'
import Item from './Item'

const ItemList = ({ data = [] }) => {
  return (
    <div className="product-list-container row row-cols-1 row-cols-md-4 g-4">
      {
        data.length > 0 ? (
          data.map(product => <Item key={product.id} info={product} />)
        ) : (
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Cargando Productos...</span>
            </div>
            <span class="h5">Cargando Productos...</span>
          </div>
        )
      }
    </div>
  )
};

export default ItemList;