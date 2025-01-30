import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='cont'>
        <h2>CONTACT ME</h2>
        <div className='porto'>
    <div className="star">
            <div className="left"></div>
            <i className="fa-solid fa-star fa-2xl" style={{ color: "#780000" }}></i>
            <div className="right"></div>
          </div>
        
    </div>
    <form method="post" className='link'>
  <input type="text" defaultValue="Full Name" name="name" id='uno'/>
  <input type="email" defaultValue="Email Address" name="email" id='dos'/>
  <input type="text" defaultValue="Phone Number" name="Phone" id='tris'/>
  <textarea name="message" id="message" defaultValue={"Message"} itemID='dort'/>
  <input type="submit" defaultValue="Send" className="sub" id='besh'/>
</form>

    </div>
    </>
  )
}
