import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Reviewa from './components/Reviewa'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar/>

      <main>
        <div id='home'>
          <Home/>
        </div>

        <div id='about'>
          <About/>
        </div>

        <div id='courses'>
          <Courses/>
        </div>

        <div id='reviews'>
          <Reviewa/>
        </div>

        <div id='contact'>
          <Contact/>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default App