import React, { useEffect, useState } from 'react'
import banner from './Images/banner.png'
import banner2 from './Images/banner2.png'
import banner3 from './Images/banner3.png'
import { PiShoppingCartLight } from 'react-icons/pi'
import { RxReload } from 'react-icons/rx'
import { GrSecure } from 'react-icons/gr'
import { GiTrophyCup } from 'react-icons/gi'
import Footer from './Footer'
import section from './Images/section.jpg' 
import product from './Images/product.jpg'
import product1 from './Images/product1.jpg'
import product2 from './Images/product2.jpg'
import {BiChevronRight} from 'react-icons/bi'
import{BsArrowRight} from 'react-icons/bs'
const productList = [
  {
    id:1,
    imageUrl:product,
    rating:3,
    title:'Xoggle aute et pariatur adipisicing nostrud et excepteur',
    price:'$18.73',
    discount:'$27.27'
  },
  {
    id:2,
    imageUrl:product1,
    rating:5,
    title:'Xoggle aute et pariatur adipisicing nostrud et excepteur',
    price:'$16.43',
    discount:'$24.55'
  },
  {
    id:3,
    imageUrl:product2,
    rating:5,
    title:'Xoggle aute et pariatur adipisicing nostrud et excepteur',
    price:'$17.13',
    discount:'$32.54'
  },
]



function Homepage() {
  const [list,setList] = useState([])
  useEffect(() => {
    setList([...productList])
  },[])

  return (
    <div className='container-fluid'>
      <div className='container-img'>
        <img className=" col-xl-8 Images-banner img fluid" src={banner} alt='img' />
        <div className='col-xl-4 container-img1'>
          <img className=' col-xl-12 Images-banner2 img fluid' src={banner2} alt='img' />
          <img className='col-xl-12 Images-banner3 img fluid' src={banner3} alt='img' />
        </div>
      </div>
      <div className='container d-flex bg-white '>
        <div className='con d-flex col-xl-3'>
          <div>
            <PiShoppingCartLight className='h-50 w-100' />
          </div>
          <div>
            <h3>Free Shipping</h3>
            <p>When ordering over $100</p>
          </div>
        </div>
        <div className='con d-flex col-xl-3'>
          <div>
            <RxReload className='h-50 w-100' />
          </div>
          <div>
            <h3>Free Return</h3>
            <p>Get Return Within 30days</p>
          </div>
        </div>
        <div className='con d-flex col-xl-3'>
          <div>
            <GrSecure className='h-50 w-100' />
          </div>
          <div>
            <h3>Secure Payment</h3>
            <p>100% Secure Online Payment</p>
          </div>
        </div>
        <div className='con d-flex col-xl-3'>
          <div>
            <GiTrophyCup className='h-50 w-100' />
          </div>
          <div>
            <h3>Best Quality</h3>
            <p>Original Product Guarenteed</p>
          </div>
        </div>
      </div>
      <div className='d-flex'>
      <h2>Gamer World</h2>
      <h5 className=''>viewmore<BsArrowRight/></h5>
      </div>

      <div className='div1 d-flex'>
      <img className=" Images-section" src={section} alt='img' />
      <div className='text'>
        <h3 className='mobiles'>Mobile & tablet</h3>
      <ul>
        <li className='mobiles'>
          <span>Xioami</span>
        </li>
        <li className='mobiles'>
          <span>Apple</span>
         </li>
         <li className='mobiles'>
          <span>Google</span>
          </li>
          <li className='mobiles'>
          <span>Samsung</span>
        </li>
      </ul>
      <h3 className='mobiles'>Shop Now <BiChevronRight/></h3>
    
      </div>
      <ul className=' main p-0 d-flex'>
        {list.map((eachProduct)=>{
          return(
         <li className='product' key={eachProduct.id}>
          <img className='img3' src={eachProduct.imageUrl} alt='img'/>
          <div className='title'>
          <h5>{eachProduct.title}</h5>
          <p className='h4'>Rating:{eachProduct.rating}</p>
          <div className='price d-flex'>
          <p className='dp m-1 h5'>{eachProduct.discount}</p>
          <p className='pri text-danger m-1 h5'>{eachProduct.price}</p>
          </div>
          </div>
         </li>
          )
        })}
      </ul>
      </div>
      <Footer/>
    </div>

  )
}
export default Homepage;
