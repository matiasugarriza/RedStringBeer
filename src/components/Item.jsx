import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({info}) => {
  return (
      <Link to={`/products/${info.id}`} className="item col card" style={{width:'18rem'}}>
            <img src={info.thumbnail} className="card-img-top" alt={info.name}></img>
            <div className="card-body">
              <h3 className="card-title" style={{fontSize:'1.5rem'}}>{info.name}</h3>
              <span className="card-title" style={{fontSize:'1.2rem'}}>Precio: ${info.price}</span>
            </div>
      </Link>
  )
}

export default Item;