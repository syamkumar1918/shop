import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav bg-primary' data-bs-theme='dark'>
      
        <img src='https://shopo.quomodothemes.website/assets/images/logo.svg'/>
        <ul className='head'>
        <li>
            <Link to="/allcategories" >Allcategories</Link>
        </li>
        <li>
            <Link to="/homepage">Homepage</Link>
        </li>
        <li>
            <Link to="/shop">Shop</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <span class="text-sm font-800">Become a Seller</span>
      </div>
    </nav>
  )
}

export default Navbar;
