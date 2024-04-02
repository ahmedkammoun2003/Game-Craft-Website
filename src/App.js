import React from 'react'
import Header from './components/Header'
import AboutEvent from './components/AboutEvent'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import News from './components/News'
import Program from './components/Program'
import styles from "./style";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#0e012d] to-[#2e0457] w-full overflow-hidden">
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Header/>
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <AboutEvent/>
      <News/>
      <Program/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
      </div>
    </div>
    </div>
  )
}

export default App