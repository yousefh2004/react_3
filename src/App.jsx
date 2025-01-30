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
import ProductDetails from './components/productdetails/ProductDetails'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ground />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about">
          <Route index element={<About />} /> 
          <Route path=":id" element={<About />} /> 
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
