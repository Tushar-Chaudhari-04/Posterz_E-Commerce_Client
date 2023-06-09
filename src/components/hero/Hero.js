import React from 'react'
import "./Hero.scss"
import { Link,useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate=useNavigate();

  return (
    <div className='hero'>
        <div className='hero-content center' >
            <h1 className='hero-heading'>Exclusive Print and Artwork</h1>
            <p className='hero-subheading'>Exclusive Art Pieces, for Exclusive you</p>
            <button className='hero-btn btn-primary'><Link to="/category">Explore Here</Link></button>
        </div>
    </div>
  )
}

export default Hero