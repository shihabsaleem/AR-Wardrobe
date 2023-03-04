import React from 'react'
import "./../Components/Style/home.scss"
import Navbar from '../Components/Navbar'
import Announce from '../Components/Announce'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Navbar/>
    </div>
  )
}

export default Home