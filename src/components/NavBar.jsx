import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore, collection , getDocs } from 'firebase/firestore'
import CartWidget from './CartWidget'
import Menu from './Menu'
import logo from '../logo.png';

const NavBar = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'Items')
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product => ({...product.data()}))))
    }, [])
  return (
    <nav className='navbar navbar-expand-lg'>
        <div class="container-fluid">
                <Link to= {'/'} className='title'>
                  <img src={logo} alt="logo" className='logo'/>
                  <h1 style={{textdecoration:'none'}}>Red String Beer</h1>
                </Link>
        <Menu data={data}/>
        <CartWidget />
        </div>               
    </nav>
  )
}

export default NavBar