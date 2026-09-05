import React from "react";
import './Portfolio.css'

const Projects = [
  { name: 'Quiz Application' ,url:'https://lakshayn0001.github.io/Quiz_Application/'},
  { 
    name: 'Real-time Chat Application', 
    url: 'https://chat-application-blush-phi.vercel.app/' 
  },
  { 
    name: 'AI Data Analyst Dashboard', 
    url: 'https://ai-data-analyst-dashboard-orcin.vercel.app/' 
  }
]

const Portfolio = () => {
  return (
    <div className="portfolio">

      <div className="portfolio_header">
        <h1>Portfolio</h1>
        <p>My Recent Work</p>
      </div>

      <div className="content_data">
        {Projects.map((value, index) => (
          <a href={value.url} target="_blank" rel="noopener noreferrer" className="project_summary" key={index}>
            <h2>{value.name}</h2>
          </a>
        ))}
      </div>

    </div>
  )
}

export default Portfolio
