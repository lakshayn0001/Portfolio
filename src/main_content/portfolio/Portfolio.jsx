import React from "react";
import './Portfolio.css';

const Projects = [
  {
    title: "Real-time Chat Application",
    badge: "Full-Stack & Real-time",
    description: "Production-ready messaging system featuring bi-directional WebSocket rooms, NextAuth session management, and a cloud PostgreSQL database with Prisma ORM.",
    tech: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "Docker", "Render", "Vercel"],
    liveUrl: "https://chat-application-blush-phi.vercel.app/",
    githubUrl: "https://github.com/lakshayn0001/Chat-Application"
  },
  {
    title: "AI Data Analyst Dashboard",
    badge: "AI & Analytics",
    description: "Intelligent analytics web application integrating Google Gemini AI to analyze uploaded CSV/JSON datasets, generate interactive charts, and answer natural language data queries.",
    tech: ["React", "Vite", "Node.js", "Express", "Gemini AI", "MongoDB Atlas", "Chart.js"],
    liveUrl: "https://ai-data-analyst-dashboard-orcin.vercel.app/",
    githubUrl: "https://github.com/lakshayn0001/AI_Data_Analyst_Dashboard"
  },
  {
    title: "Interactive Quiz Application",
    badge: "Frontend Web App",
    description: "Engaging interactive assessment platform with question timers, dynamic score evaluation, responsive card layouts, and animated performance review screens.",
    tech: ["JavaScript", "HTML5", "CSS3", "GitHub Pages"],
    liveUrl: "https://lakshayn0001.github.io/Quiz_Application/",
    githubUrl: "https://github.com/lakshayn0001/Quiz_Application"
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio_header">
        <span className="section_badge">SHOWCASE</span>
        <h1>Featured Projects</h1>
        <p>Explore full-stack, AI-powered, and real-time applications built for production</p>
      </div>

      <div className="content_data">
        {Projects.map((project, index) => (
          <article className="project_card" key={index}>
            <div className="card_header">
              <span className="project_badge">{project.badge}</span>
            </div>

            <div className="card_body">
              <h2>{project.title}</h2>
              <p className="project_description">{project.description}</p>

              <div className="tech_tags">
                {project.tech.map((t, idx) => (
                  <span className="tech_pill" key={idx}>{t}</span>
                ))}
              </div>
            </div>

            <div className="card_footer">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn_live"
              >
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn_code"
              >
                <span>GitHub</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
