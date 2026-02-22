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
              I am a Computer Science graduate with a strong passion for building scalable and user-friendly web applications. I enjoy transforming ideas into functional digital products using modern JavaScript-based technologies while continuously improving my problem-solving and development skills.
              I have a solid foundation in Data Structures and Algorithms using C++, along with hands-on experience in JavaScript, CSS, React.js, Node.js, Express.js, and MongoDB (Mongoose). I have worked on full-stack projects involving responsive frontend interfaces, RESTful APIs, and efficient backend systems with a focus on clean code and performance.
              I am comfortable using tools like Git and Visual Studio Code, and I have experience managing databases and application logic using MongoDB and Mongoose. I enjoy working in collaborative environments, learning new technologies, and taking on challenging problems that help me grow as a full-stack developer.
            </p>

              <a id="content-btn" href="https://drive.google.com/file/d/1l5jgozGyEKUmIcUZ9R0aa2l7dgUqefmd/view?usp=sharing">
              Download CV
              </a>
            
          </div>

        </div>
      </div>

    </div>
  )
}

export default About
