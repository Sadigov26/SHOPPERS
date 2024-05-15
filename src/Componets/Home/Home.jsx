import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Sitesection from '../Sitesection/Sitesection'
import Siteimagesec from '../Siteimagesec/Siteimagesec'
import Product from '../Product/Product'
import Blog from '../Blog/Blog'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Sitesection/>
      <Siteimagesec/>
      <Product/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
