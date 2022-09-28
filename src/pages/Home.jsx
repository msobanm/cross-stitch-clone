import React from 'react'
import ArrivalSlider from '../components/ArrivalSlider'
import Footer from '../components/Footer'
import MainBanner from '../components/MainBanner'
import Navigation from '../components/Navigation'
import Seasons from '../components/Seasons'
import Shop from '../components/Shop'
import VideoPlayer from '../components/VideoPlayer'

const Home = () => {
  return (
   <>
    <Navigation/>
    <MainBanner/>
    <ArrivalSlider/>
    <Shop/>
    <Seasons/>
    <VideoPlayer/>
    <Footer/>
   </>
  )
}

export default Home