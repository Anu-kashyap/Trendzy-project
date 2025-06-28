import React from 'react'
import './collection.css'
import image1 from './../../assets/product1.png'
import image2 from './../../assets/product2.png'
import image3 from './../../assets/product3.png'
import image4 from './../../assets/product4.png'
import image5 from './../../assets/product5.png'
import image6 from './../../assets/product7.png'
import image7 from './../../assets/product8.png'
import image8 from './../../assets/product9.png'
import image9 from './../../assets/product10.png'
import image10 from './../../assets/product11.png'

const collection = () => {
  return (
    <>
      <div className="letast-collection">
        <div className='letast-info'>
          <p className='latest-heading'>Letast Collection</p>
          <p className='text-light'>Trendzy’s latest collection is where elegance meets trend. Fashion that speaks your style.</p>
        </div>
      
      <div className="product-letast-collection">
        <div className="products-letast">
          <div className='product-img'>
            <img src={image1} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
        <div className="products-letast">
          <div className='product-img'>
            <img src={image2} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
        <div className="products-letast">
          <div className='product-img'>
            <img src={image3} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
        <div className="products-letast">
          <div className='product-img'>
            <img src={image4} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
        <div className="products-letast">
          <div className='product-img'>
            <img src={image5} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
        <div className="products-letast">
          <div className='product-img'>
            <img src={image6} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
        <div className="products-letast">
          <div className='product-img'>
            <img src={image7} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
        <div className="products-letast">
          <div className='product-img'>
            <img src={image8} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
        <div className="products-letast">
          <div className='product-img'>
            <img src={image9} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
        <div className="products-letast">
          <div className='product-img'>
            <img src={image10} alt="" />
          </div>
          <p className='product-title'>Midnight Muse Bodycon</p>
          <p className='product-price'>Rs.1999</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default collection
