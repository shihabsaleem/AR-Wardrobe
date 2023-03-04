import React from 'react'
import "./../Components/Style/home.scss"
import Navbar from '../Components/Navbar'
import Announce from '../Components/Announce'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div className='home'>
      <Announce/>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home