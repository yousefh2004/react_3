import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className="navbar">
  <div className="container">
    <div className="logo">
      <Link to={'/'}>Start Bootstrap</Link>
    </div>
    <div>
        <div className='uui'>
          <Link to={'/portfolio'}>Portfolio</Link> 
          <Link to={'/about'}>About</Link> 
          <Link to={'/contact'}>Contact</Link>  
        </div>
    </div>
  </div>
</div>
    </>
  )
}
