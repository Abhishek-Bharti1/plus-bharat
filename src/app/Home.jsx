import React from 'react'
import About from './components/About'
import AdVedio from './components/AdVedio'
import AppWork from './components/AppWork'
import BuyGold from './components/BuyGold'
import Navbar from './components/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar/>  
      <About/>
      <BuyGold/>
      <AppWork/>
      <AdVedio/>
    </div>
  )
}

export default HomePage