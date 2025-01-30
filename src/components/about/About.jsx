import React from 'react'

export default function About() {
  return (
    <>
    <div className='abo'>
    <h2>About</h2>
    <div className='porto abu'>
    <div className="star">
            <div className="left"></div>
            <i className="fa-solid fa-star fa-2xl" style={{ color: "#ffff" }}></i>
            <div className="right"></div>
          </div>
        
    </div>
    <div className='par'>
            <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>

          </div>
         <div className="download">
  <i className="fa-solid fa-download fa-lg" style={{color: '#ffff'}} />
  <a href="#">Free Download</a>
</div>

          </div>
    </>
  )
}
