import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, thumbnail, price}) => {
  
  return (
      <Link to={`/products/${id}`}>
        <div className='col'>
          <div class="card" style={{width:'18rem'}}>
            <img src={thumbnail} class="card-img-top" alt={name}></img>
            <div class="card-body">
              <h3 class="card-title" style={{fontSize:'1.5rem'}}>{name}</h3>
              <span class="card-title" style={{fontSize:'1.2rem'}}>${price}</span>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default Item;