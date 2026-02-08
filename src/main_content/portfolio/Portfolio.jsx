import React from "react";
import './Portfolio.css'

const Projects = [
  { name: 'Quiz Application' ,url:'https://lakshayn0001.github.io/Quiz_Application/'},
  { name: 'CSS Project' ,url:'https://lakshayn0001.github.io/Quiz_Application/'},
  { name: 'JavaScript Project' ,url:'https://lakshayn0001.github.io/Quiz_Application/' },
  { name: 'React App' ,url:'https://lakshayn0001.github.io/Quiz_Application/'},
  { name: 'Bootstrap UI' ,url:'https://lakshayn0001.github.io/Quiz_Application/'},
  { name: 'Git Practice' ,url:'https://lakshayn0001.github.io/Quiz_Application/'}
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
          <a href={value.url} className="project_summary" key={index}>
            <h2>{value.name}</h2>
          </a>
        ))}
      </div>

    </div>
  )
}

export default Portfolio
