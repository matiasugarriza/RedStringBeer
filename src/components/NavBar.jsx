import React from 'react';
import logo from '../logo.png';
import CartWidget from './CartWidget'
import Menu from './Menu';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
        <div class="container-fluid">
            <div className='title'>
                <Link to= {'/'}>
                  <img src={logo} alt="logo" className='logo'/>
                  <h1 style={{textdecoration:'none'}}>Red String Beer</h1>
                  </Link>
            </div>
        <Menu />
        <CartWidget />    
        </div>               
    </nav>
  )
}

export default NavBar