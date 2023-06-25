import React from 'react'
import Announce from '../Components/Announce'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProductDetails from '../Components/ProductDetails'

const Product = () => {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <ProductDetails/>
        <Footer />

    </div>
  )
}

export default Product;