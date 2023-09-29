import React from 'react'
import banner from './Images/banner.png'
import banner2 from './Images/banner2.png'
import banner3 from './Images/banner3.png'

function Homepage() {
  return (
    <div className='container'>
    
    <div className='container-img'>
      <img  className="Images-banner img fluid"src={banner} alt='img'/>
      <div className='container-img1'>
      <img className='Images-banner2 img fluid'src={banner2} alt='img'/>
      <img className='Images-banner3 img fluid'src={banner3} alt='img'/>
    </div>
    </div>
   </div>
    
  )
}
export default Homepage;
