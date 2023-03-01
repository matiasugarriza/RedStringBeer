import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Link to={`/products`}>
        <div>Productos</div>
    </Link>
  )
}

export default Menu