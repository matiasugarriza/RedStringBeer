import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({data}) => {
  return (
    <div className="menu">
    <Link to={`/products`} className="opcion">
        <h5>Productos</h5>
    </Link>
        {
          data.map((product) => {
            return (
            <Link to={`/category/${product.category}`} className="opcion">
              <h5>{product.category}</h5>
            </Link>
            )})
        }
    </div>
  )
}

export default Menu