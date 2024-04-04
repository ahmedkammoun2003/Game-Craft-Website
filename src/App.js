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
    <div className="bg-gradient-to-b from-[#0e012d] to-purple-900 w-full overflow-hidden">
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Header/>
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <AboutEvent/>
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
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