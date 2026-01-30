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
        <h1>Hello,I'm  </h1>
        <h1>Lakshay Nagpal a Passionate</h1>
        <h2>Software Developer</h2>
        <h3>Crafting innovative digital solutions and bringing ideas to life with clean, efficient code. Ready to build something amazing?</h3>
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
