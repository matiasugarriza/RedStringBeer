import React from 'react'

const Search = () => {
  return (
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search" style={{
            width:'30vw'
        }}></input>
        <button class="btn btn-outline-danger" type="submit">Buscar</button>
    </form>
  )
}

export default Search