import React from 'react'
import "./Home.scss"
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Categories from '../categories/Categories'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'

const Home = () => {
  return (
    <div>
    <Hero/>
    <section className='collection container'>
      <div className='info'>
        <h2 className='heading'>Shop by Category</h2>
        <p className='sub-heading'>Shop from the best,Our film and TV Posters</p>
      </div>
      <div className='content'>
        <Category/>
        <Category/>
        <Category/>
      </div>
    </section>

    <section className='collection container'>
      <div className='info'>
        <h2 className='heading'>Our Top Products</h2>
        <p className='sub-heading'>All new designs,same old details</p>
      </div>
      <div className='content'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </section>

    <section className='collection container'>
      <div className='info'>
        <h2 className='heading'>Shop by Category</h2>
        <p className='sub-heading'>Shop from the best,Our film and TV Posters</p>
      </div>
      <div className='content'>
        <Category/>
        <Category/>
        <Category/>
      </div>
    </section>
    </div>
  )
}

export default Home