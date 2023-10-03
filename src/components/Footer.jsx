import React from 'react'
import discount from './Images/discount.jpg'
import { CiMail } from 'react-icons/ci'
import { FiInstagram } from 'react-icons/fi'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { GrYoutube } from 'react-icons/gr'
import payment from './Images/payment.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer1'>
        <img className=" Images-discount" src={discount} alt='img' />
        <div>
          <div className='footer2'>
            <h1> Get 20% Off Discount Coupon</h1>
            <p>by Subscribe our Newsletter</p>
            <div className='mail d-flex'>
              <div className=' mail1 d-flex'>
                <CiMail className='eicon' />
                <input className='email' type='email' placeholder='EMAIL ADDRESS' />
              </div>
              <button type='button' className='button bg-warning'>Get The Coupon</button>
            </div>
          </div>
        </div>
      </div>
      <div className='footer3'>
        <img className='logo-footer' src='https://shopo.quomodothemes.website/assets/images/logo.svg' />
      </div>
      <div className='footer-content bg-white'>
        <div className='footer-content1'>

          <div className='about'>
            <h2>About Us</h2>
            <p>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
          </div>

          <div className='feature'>
            <h2>Feature</h2>
            <p>About Us</p>
            <p>Terms Condition</p>
            <p>Best Products</p>
          </div>

          <div className='general'>
            <h2>General Links</h2>
            <p>Blog</p>
            <p>Tracking Order</p>
            <p>Become Seller</p>
          </div>

          <div className='helpful'>
            <h2>Helpful</h2>
            <p>Flash Sale</p>
            <p>FAQ</p>
            <p>Support</p>
          </div>
        </div>
        <div className='footer-icon'>
          <FiInstagram className='fi'/> <BiLogoFacebookCircle className='fi'/><GrYoutube className='fi'/>
          <div>
            <p className='fi-text'>©2022 <span className='quomodosof'>Quomodosof</span> All rights reserved</p>
          </div>
          <div>
          <img className=" Images-payment" src={payment} alt='img' />
          </div>
        </div>

      </div>
    </div>
  )
}
export default Footer;
