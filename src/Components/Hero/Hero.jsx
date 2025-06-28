import React from 'react'
import './Hero.css'
import image from '../../assets/navbar.png'
import { MdOutlineHorizontalRule } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className="hero-content">
          <p className='para'><MdOutlineHorizontalRule style={{ color: "black" }} />OUR BESTSELLERS</p>
          <p className='second-para'>TRENDZY ARRIVALS</p>
          <p className='para'>SHOP NOW<MdOutlineHorizontalRule style={{ color: "black" }} /></p>
        </div>
        <img src={image} alt="" className='hero-img' />
      </div>
      
    </>
  )
}

export default Hero
