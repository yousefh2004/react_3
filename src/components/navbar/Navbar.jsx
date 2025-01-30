import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className="navbar">
  <div className="container">
    <div className="logo">
      <Link to={'/'}>YYH Store</Link>
    </div>
    <div>
        <div className='uui'>
          <Link to={'/portfolio'}>Categouries</Link> 
          <Link to={'/about'}>Products</Link> 
          <Link to={'/contact'}>Add Product</Link>  
        </div>
    </div>
  </div>
</div>
    </>
  )
}

