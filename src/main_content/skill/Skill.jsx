import React from "react";
import './Skill.css';

const skillCategories = [
  {
    title: "Languages",
    badge: "Core",
    skills: ["JavaScript (ES6+)", "TypeScript", "C++", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Frontend Development",
    badge: "Client-Side",
    skills: ["React.js", "Next.js 16", "Tailwind CSS", "Chart.js", "Vite", "Responsive Design"]
  },
  {
    title: "Backend & Databases",
    badge: "Server-Side",
    skills: ["Node.js", "Express.js", "Socket.io", "PostgreSQL", "MongoDB Atlas", "Prisma ORM", "REST APIs"]
  },
  {
    title: "DevOps & Cloud",
    badge: "Deployment & Tools",
    skills: ["Docker", "Kubernetes", "Git & GitHub", "Vercel", "Render", "Postman", "CI/CD Pipelines"]
  }
];

const Skill = () => {
  return (
    <section className="skill" id="skill">
      <div className="first_div">
        <span className="section_badge">EXPERTISE</span>
        <h1>My Tech Arsenal</h1>
        <p>A comprehensive toolkit of languages, frameworks, and cloud technologies I leverage to build scalable systems</p>
      </div>

      <div className="second_div">
        {skillCategories.map((category, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-box-header">
              <span className="skill-category-badge">{category.badge}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="skill-grid">
              {category.skills.map((skill, sIdx) => (
                <div className="skill-item" key={sIdx}>
                  <span className="skill-dot"></span>
                  <span className="skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
