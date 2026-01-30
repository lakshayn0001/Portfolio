import React from "react";
import './Portfolio.css'

const Projects = [
  { name: 'HTML Project' },
  { name: 'CSS Project' },
  { name: 'JavaScript Project' },
  { name: 'React App' },
  { name: 'Bootstrap UI' },
  { name: 'Git Practice' }
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
          <div className="project_summary" key={index}>
            <h2>{value.name}</h2>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Portfolio
