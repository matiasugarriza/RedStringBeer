import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({data}) => {
  const categories = [ ...new Set(data.map(product => product.category))]
  return (
    <div className="menu">
    <Link to={`/products`} className="opcion">
        <h5>Productos</h5>
    </Link>
        {
          categories.map((category) => {
            return (
            <Link to={`/category/${category}`} className="opcion">
              <h5>{category}</h5>
            </Link>
            )})
        }
    </div>
  )
}

export default Menu