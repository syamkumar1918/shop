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
import brand1 from './Images/brand1.png'
import brand2 from './Images/brand2.png'
import brand3 from './Images/brand3.png'
import brand4 from './Images/brand4.png'
import brand5 from './Images/brand5.png'
import brand6 from './Images/brand6.png'
import brand7 from './Images/brand7.png'
import brand8 from './Images/brand8.png'
import brand9 from './Images/brand9.png'
import brand10 from './Images/brand10.png'
import brand11 from'./Images/brand11.png'
import brand12 from './Images/brand12.png' 
import products1 from './Images/products1.jpg'
import products2 from './Images/product2.jpg'
import products3 from './Images/products3.jpg'
import products4 from './Images/products4.jpg'

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

const products =[
  {
    id:1,
    imageUrl:products1,
    rating:5,
    title:'Senmei ipsum dolore eiusmod dolor officia do nisi',
    price:'$27.61',
    discount:'$20.67',
    button:'Add To Cart',
  },
  {
    id:2,
    imageUrl:products2,
    rating:5,
    title:'Unisure aliqua repreh ex cupt qui elit officia',
    price:'$16.43',
    dicount:'$36.90',
    button:'Add To Cart'

  },

  {
   id:3,
   imageUrl:products3,
   rating:5,
   title:'Canopoly duis voluptate dolor sunt sit adipisicing in',
   price:'$10.42',
   discount:'$39.27',
   button:'Add To Cart'
  },
  {
    id:4,
    imageUrl:products4,
    rating:5,
    title:'Kenegy consectetur id ex nulla in adipisicing deserunt',
    price:'$11.92',
    discount:'$26.62',
    button:'Add To Cart'
  }
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
      <div className='brand'>
        <h2>Shop by Brand</h2>
        <div className='brand-logo'>
          <div className='logo2'>
        <img className='brand-logo1' src={brand1} alt='img'/>
        <img className='brand-logo1' src={brand2} alt='img'/>
        <img className='brand-logo1' src={brand3} alt='img'/>
        <img className='brand-logo1' src={brand4} alt='img'/>
        <img className='brand-logo1' src={brand5} alt='img'/>
        <img className='brand-logo1' src={brand6} alt='img'/>
        </div>
        <div>
        <img className='brand-logo1' src={brand7} alt='img'/>
        <img className='brand-logo1' src={brand8} alt='img'/>
        <img className='brand-logo1' src={brand9} alt='img'/>
        <img className='brand-logo1' src={brand10} alt='img'/>
        <img className='brand-logo1' src={brand11} alt='img'/>
        <img className='brand-logo1' src={brand12} alt='img'/>
        </div>
        </div>
      </div>
      <h2> Top Selling Products</h2>
      <ul className=' products-ul bg-warning row col-lg-6 w-100'>
        {products.map((eachproduct) =>{
          return(
            <li className=' products-li row col-xl-6 ' key={eachproduct.id}>
              <div className='products-main d-flex'>
              <img className='products-img' src={eachproduct.imageUrl} alt='img'/>
              <div className='text-products'>
              <h4>{eachproduct.title}</h4>
              <p> Rating:{eachproduct.rating}</p>
              <p className='products-discount'> {eachproduct.discount}</p>
              <p className='products-price'> {eachproduct.price}</p>
              <button className='bg-warning'>{eachproduct.button}</button>
              </div>
              </div>

            </li>
          )
        }
        )}
      </ul>
      <Footer/>
    </div>

  )
}
export default Homepage;
