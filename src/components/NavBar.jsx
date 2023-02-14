import React from 'react';
import logo from '../logo.png';
import CartWidget from './CartWidget'
import Search from './Search';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
        <div class="container-fluid">
            <div className='title'>
                <img src={logo} alt="logo" className='logo'/>
                <h1>Red String Beer</h1>
            </div>
        <Search />
        <CartWidget />    
        </div>               
    </nav>
  )
}

export default NavBar