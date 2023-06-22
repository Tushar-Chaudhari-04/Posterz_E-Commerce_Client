import React, { useEffect, useState } from 'react'
import "./Home.scss"
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Category from "../../components/category/Category"
import Product from '../../components/product/Product'
import { axiosClient, categoryList } from '../../axiosClient'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../redux/slice/categorySlice/CategorySlice'

const Home = () => {
  const [categories,setCategories]=useState(null);
  const [topPick,setTopPick]=useState(null);
  const dispatch=useDispatch();

   const fetchData=async()=>{
    const categoryResponse=await axiosClient.get('/categories?populate=image');
    const productResponse=await axiosClient.get('/products?filters[isTopPick][$eq]=true&populate=image');
    
    if(categoryResponse){
      setCategories(categoryResponse.data.data);
    }

    if(productResponse){
      setTopPick(productResponse.data.data);
    }
   
  }

  useEffect(() => { 
    fetchData();
    console.log("category",categories);
    console.log("topPick",topPick);
  }, [])
  
  
  return (
    <div>
    <Hero/>
    <section className='collection container'>
      <div className='info'>
        <h2 className='heading'>Shop by Category</h2>
        <p className='sub-heading'>Shop from the best,Our film and TV Posters</p>
      </div>
      <div className='content'>
      {categories?.map(item=>(
        <Category key={item.id} props={item}/>
      ))}
      </div>
    </section>

    <section className='collection container'>
      <div className='info'>
        <h2 className='heading'>Our Top Products</h2>
        <p className='sub-heading'>All new designs,same old details</p>
      </div>
      <div className='content'>
        {topPick?.map(item=>(
          <Product key={item.id} data={item}/>
        ))}
        
      </div>
    </section>
    </div>
  )
}

export default Home