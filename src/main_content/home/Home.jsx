import React from "react";
import './Home.css'
import Poster from '../../../public/Poster.jpeg'


const gotobottom=()=>{
  document.getElementById('contact').scrollIntoView({behavior:"smooth"})
}
const Home = () => {
  return (
    <div id="home_page">
      <div id="content_section">
        <h1>Lakshay Nagpal</h1>
        <h2>Full Stack Developer</h2>
        <h3>2.8 years of experience at OATI</h3>
        <div><button onClick={gotobottom} >Say Hi...</button>
         </div>
      </div>

      <div id="photo_section">
        <img id="poster" src={Poster} alt="Lakshay" />
      </div>
    </div>
  )
}

export default Home
