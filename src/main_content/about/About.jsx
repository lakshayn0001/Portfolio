import React from "react";
import './About.css'
import Poster from '../../../public/Poster.jpeg'

const About = () => {
  return (
    <div className="about">

      <div id="block_first">
        <h1>About Me</h1>
        <p>My Introduction</p>
      </div>

      <div id="block_second">

        <div id="photo_section">
          <img id="poster_img" src={Poster} alt="Lakshay" />
        </div>

        <div id="content_section">

          <div id="button_sections">
            <div className="stat-card">
              <h3>Experience</h3>
              <p>2+ Years</p>
            </div>

            <div className="stat-card">
              <h3>Completed</h3>
              <p>10+ Projects</p>
            </div>

            <div className="stat-card">
              <h3>Support</h3>
              <p>24/7 Online</p>
            </div>
          </div>

          <div id="content_part">
            <p>
              Full Stack Developer specializing in React, JavaScript, Node.js, Express, and MongoDB (Mongoose),
              with hands-on experience in developing end-to-end web applications. Skilled in building REST APIs,
              integrating databases, and creating responsive, user-friendly interfaces.
            </p>

              <a id="content-btn" href="https://drive.google.com/file/d/1DErO9fEbWm6cG5fGlOlfJJLJoPkwILBE/view?usp=sharing">
              Download CV
              </a>
            
          </div>

        </div>
      </div>

    </div>
  )
}

export default About
