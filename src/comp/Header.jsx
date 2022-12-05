import React from 'react'
import image from "./main.jpg"
import "/src/css/header.css"
import emailbutton from "./eButton.png"
import linkedinbutton from "./lButton.png"


function Header() {
  return (
    <div className='headerwrapper'>
      <img className = "mainimage"src={image} alt="" />
      <h2 id ="myname">Iman Kamrava</h2>
      <h6>Frontend Developer</h6>
      <a>Personal Page</a>
      <div className='buttonswrapper'>
      <img src={emailbutton} alt="" width={"30%"} />
      <img src={linkedinbutton} alt="" width={"30%"} />
      </div>
    </div>
  )
}

export default Header
