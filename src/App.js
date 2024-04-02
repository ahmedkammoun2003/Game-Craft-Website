import React from 'react'
import Header from './components/Header'
import AboutEvent from './components/AboutEvent'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import News from './components/News'
import Program from './components/Program'

function App() {
  return (
    <div>
      <Header/>
      <AboutEvent/>
      <News/>
      <Program/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App