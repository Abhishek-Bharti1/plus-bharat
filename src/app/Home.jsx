import React from 'react'
import About from './components/About'
import AdVedio from './components/AdVedio'
import AppWork from './components/AppWork'
import BuyGold from './components/BuyGold'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'
import Goals from './components/Goals'
import Navbar from './components/Navbar'
import Secure from './components/Secure'
import TrustedBy from './components/TrustedBy.jsx'

const HomePage = () => {
  return (
    <div>
      <Navbar/>  
      <About/>
      <BuyGold/>
      <AppWork/>
      <AdVedio/>
      {/* <Goals/> */}
      <TrustedBy/>
      <DownloadApp/>
      <Secure/>
      <Footer/>
    </div>
  )
}

export default HomePage