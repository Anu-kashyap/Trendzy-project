import React from 'react'
import './About.css'
import about from './../../assets/about.png'

const About = () => {
  return (
    <>
      <div className='About'>
        <p className='About-title'>About Us</p>
        <div className="About-content">
          <div className="About-image">
            <img src={about} alt="" />
          </div>
          <div className="about-paragraph">
            <p><span>Trendzy</span> is your go-to destination for premium fashion that speaks elegance, confidence, and modern style. We believe in celebrating every body type through bold and beautiful silhouettes—especially our signature <span>bodycon dresses</span> designed to turn heads.</p>
            <p> Our curated collections reflect the latest trends while maintaining timeless quality. Whether you're dressing up for a party or owning your everyday look, Chlothzy ensures you're always fashion-forward with comfort and flair.</p>
            <p><span>Our Mission</span>- At Trendzy, our mission is to empower individuals through style. We aim to offer easy access to high-quality, trendsetting apparel that makes you feel confident in your own skin—especially with our standout bodycon range.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
