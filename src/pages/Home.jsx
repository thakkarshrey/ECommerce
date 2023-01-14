import React from 'react'
import Anouncement from '../components/Anouncement'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Anouncement/>
        <Navbar/>
        <Slider/>
        <Category/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home