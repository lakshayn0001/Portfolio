import React from "react";
import './Home.css';
import Poster from '../../../public/Poster.jpeg';

const Home = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home_page" className="home_hero">
      <div className="home_container">
        <div id="content_section">
          <div className="status_badge">
            <span className="pulsing_dot"></span>
            <span>Available for Opportunities</span>
          </div>

          <h1 className="hero_greeting">
            Hi, I'm <span className="hero_name">Lakshay Nagpal</span>
          </h1>

          <h2 className="hero_role">Software Developer</h2>

          <p className="hero_tagline">
            Software Developer specializing in building high-performance full-stack web applications, real-time systems, and AI-driven platforms with clean, robust code.
          </p>

          <div className="hero_actions">
            <button className="btn_primary" onClick={() => scrollTo('portfolio')}>
              View Projects ↗
            </button>
            <button className="btn_secondary" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div id="photo_section">
          <div className="avatar_wrapper">
            <div className="avatar_glow"></div>
            <div className="avatar_frame">
              <img id="poster" src={Poster} alt="Lakshay Nagpal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
