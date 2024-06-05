import React from 'react'
import About from './components/About'
import AdVedio from './components/AdVedio'
import AppWork from './components/AppWork'
import BuyGold from './components/BuyGold'
import Chart from './components/Chart'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Secure from './components/Secure'
import SocialMedia from './components/SocialMedia'
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
      <Chart/>
      <TrustedBy/>
      <SocialMedia/>
      <DownloadApp/>
      <Secure/>
      <Footer/>
    </div>
  )
}

export default HomePage