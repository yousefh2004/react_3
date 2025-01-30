import React from 'react'

export default function Portfolio() {
  return (
    <>
    <h2>PORTFOLIO</h2>
    <div className='porto'>
    <div className="star">
            <div className="left"></div>
            <i className="fa-solid fa-star fa-2xl" style={{ color: "#780000" }}></i>
            <div className="right"></div>
          </div>
    </div>
    <div className='father'>
        <img src="cabin.png" alt="" width='400px'/>
        <img src="cake.png" alt=""  width='400px'/>
        <img src="circus.png" alt=""  width='400px'/>
        <img src="game.png" alt=""  width='400px'/>
        <img src="safe.png" alt=""  width='400px'/>
        <img src="submarine.png" alt=""  width='400px'/>
    </div>
    </>
  )
}
