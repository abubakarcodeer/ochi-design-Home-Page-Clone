import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Feature from './components/Feature'
import Cards from './components/Cards'
import PlayEyeContainer from './components/PlayEyeContainer'
import ReadyToStart from './components/ReadyToStart'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import useForceReloadOnResize from './components/Hook/useForceReloadOnResize'

const App = () => {

  const locomotiveScroll = new LocomotiveScroll()
  useForceReloadOnResize();

  return (
    <div className='w-full min-h-screen bg-zinc-100 text-zinc-950'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <PlayEyeContainer />
      <Feature />
      <Cards />
      <ReadyToStart />
      <Footer />
    </div>
  )
}

export default App