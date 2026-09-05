import React from "react";
import './About.css';
import Poster from '../../../public/Poster.jpeg';

const stats = [
  { label: "Experience", value: "2+ Years", detail: "Software Development" },
  { label: "Delivered", value: "10+ Projects", detail: "Full-Stack & Cloud" },
  { label: "Dedication", value: "100%", detail: "Production Quality" }
];

const About = () => {
  return (
    <section className="about" id="about">
      <div id="block_first">
        <span className="section_badge">ABOUT ME</span>
        <h1>My Background</h1>
        <p>Passionate software engineer focused on building robust, scalable digital experiences</p>
      </div>

      <div id="block_second">
        <div id="photo_section">
          <div className="about_poster_wrapper">
            <img id="poster_img" src={Poster} alt="Lakshay" />
          </div>
        </div>

        <div id="content_section">
          <div id="button_sections">
            {stats.map((stat, idx) => (
              <div className="stat_card" key={idx}>
                <span className="stat_val">{stat.value}</span>
                <h3 className="stat_label">{stat.label}</h3>
                <p className="stat_detail">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div id="content_part">
            <p>
              I am a Computer Science graduate dedicated to building high-performance, user-centric web applications and scalable backend architectures. I specialize in solving complex problems through clean algorithms, modern JavaScript/TypeScript stacks, and cloud-native containerized workflows.
            </p>
            <p>
              With strong foundations in Data Structures and Algorithms, I engineer full-stack systems with Next.js, React, Node.js, Express, PostgreSQL, Docker, and WebSockets. I thrive on shipping reliable, production-ready software that delivers measurable impact.
            </p>

            <div className="about_cta">
              <a 
                id="content-btn" 
                href="https://drive.google.com/file/d/1l5jgozGyEKUmIcUZ9R0aa2l7dgUqefmd/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Download Resume</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
