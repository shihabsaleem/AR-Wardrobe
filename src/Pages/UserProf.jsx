import React from 'react'
import Announce from '../Components/Announce'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Profile from '../Components/Profile'

const UserProf = ({user}) => {
  return (
    <div> 
        <Announce/>
        <Navbar />
        <Profile/>
        <Footer />
    </div>
  )
}

export default UserProf