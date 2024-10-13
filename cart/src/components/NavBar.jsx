import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { BiLogoShopify } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      {/* Logo/Brand */}
      <NavLink to='/' className='navbar-logo'>
        <div className='logo'>
        <BiLogoShopify />
        </div>
      </NavLink>

      {/* Navigation Links */}
      <NavLink to='/' className='navbar-item'>
        <p className='navbar-text'>Home</p>
      </NavLink>

      {/* Cart Icon */}
      <NavLink to='/cart' className='navbar-item'>
        <div className='cart-icon'  >
          <FaShoppingCart />
        </div>
      </NavLink>
    </div>
  );
};

export default NavBar;
