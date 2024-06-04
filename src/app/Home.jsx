import React from 'react'
import About from './components/About'
import BuyGold from './components/BuyGold'
import Navbar from './components/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar/>  
      <About/>
      <BuyGold/>
    </div>
  )
}

export default HomePage