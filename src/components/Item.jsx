import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, thumbnail, price}) => {
  
  return (
      <Link to={`/products/${id}`} className="item col card" style={{width:'18rem'}}>
            <img src={thumbnail} className="card-img-top" alt={name}></img>
            <div className="card-body">
              <h3 className="card-title" style={{fontSize:'1.5rem'}}>{name}</h3>
              <span className="card-title" style={{fontSize:'1.2rem'}}>Precio: ${price}</span>
            </div>
      </Link>
  )
}

export default Item;