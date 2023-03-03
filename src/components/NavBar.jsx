import React from 'react';
import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'
import Menu from './Menu';

import logo from '../logo.png';
const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
        <div class="container-fluid">
                <Link to= {'/'} className='title'>
                  <img src={logo} alt="logo" className='logo'/>
                  <h1 style={{textdecoration:'none'}}>Red String Beer</h1>
                </Link>
        <Menu />
        <CartWidget />    
        </div>               
    </nav>
  )
}

export default NavBar