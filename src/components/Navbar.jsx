import React from 'react'
import { Link } from 'react-router-dom';
import {SlArrowRight } from "react-icons/sl";
import{TfiReload} from "react-icons/tfi";
import{AiOutlineHeart} from "react-icons/ai";
import{BsHandbag} from "react-icons/bs";
import{BsPerson}from "react-icons/bs";

function Navbar() {
  return (
    <nav className='nav bg-warning' >
      
        <img className='logo' src='https://shopo.quomodothemes.website/assets/images/logo.svg'/>
        <ul className='head'>
        <li className='headers'>
            <Link to="/allcategories" >Allcategories</Link>
        </li>
        <li className='headers'>
            <Link to="/homepage">Homepage</Link>
        </li>
        <li className='headers'>
            <Link to="/shop">Shop</Link>
        </li>
        <li className='headers'>
            <Link to="/blog">Blog</Link>
        </li>
        <li className='headers'>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <button className='btn'>Become a Seller <SlArrowRight/></button>
      </div>
      <div className='icons'>
        <TfiReload className='icon' href='#'/>
        <AiOutlineHeart className='icon' href='#'/>
        <BsHandbag className='icon' href='#'/>
        <BsPerson className='icon' href='#'/>
      </div>
      </nav>
    
  )
}

export default Navbar;
