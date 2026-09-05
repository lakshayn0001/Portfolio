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
            <span>Available for New Opportunities</span>
          </div>

          <h1 className="hero_greeting">
            Hi, I'm <span className="hero_name">Lakshay Nagpal</span>
          </h1>

          <h2 className="hero_role">Full-Stack & Cloud Developer</h2>

          <p className="hero_tagline">
            Building high-performance, real-time web applications, AI dashboards, and cloud-native solutions with modern full-stack architectures.
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
            <img id="poster" src={Poster} alt="Lakshay Nagpal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
