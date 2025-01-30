import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Ground from './components/ground/Ground'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Navbar />
     <Ground />
     
     <Routes>
      <Route path='/portfolio' element={<Portfolio />}>
      </Route>
      <Route path='/about' element={<About />}>
      </Route>
      <Route path='/contact' element={<Contact />}>
      </Route>
      <Route path='/'>
      </Route>
     </Routes>

     <Footer />
    </>
  )
}

export default App
