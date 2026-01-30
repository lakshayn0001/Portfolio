import React from "react";
import './Skill.css'

const languages = [
  { name: 'C++' },
  { name: 'JavaScript' }
]

const frontend_skill = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Bootstrap' }
]

const backend_skill = [
  { name: 'Node' },
  { name: 'Express JS' },
  { name: 'Mongoose' }
]

const tools = [
  { name: 'VS Code' },
  { name: 'Git' },
  { name: 'Postman' },
  { name: 'GitHub' }
]

const Skill = () => {
  return (
    <div className="skill">

      <div className="first_div">
        <h1>My Tech Arsenal</h1>
        <h2>Here's a glimpse of the technologies and tools I leverage</h2>
        <h3>to build robust and innovative solutions</h3>
      </div>

      <div className="second_div">

        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skill-grid">
            {languages.map((v, i) => <p className="skill-item" key={i}>{v.name}</p>)}
          </div>
        </div>

        <div className="skill-box">
          <h2>Frontend</h2>
          <div className="skill-grid">
            {frontend_skill.map((v, i) => <p className="skill-item" key={i}>{v.name}</p>)}
          </div>
        </div>

        <div className="skill-box">
          <h2>Backend</h2>
          <div className="skill-grid">
            {backend_skill.map((v, i) => <p className="skill-item" key={i}>{v.name}</p>)}
          </div>
        </div>

        <div className="skill-box">
          <h2>Tools & Platforms</h2>
          <div className="skill-grid">
            {tools.map((v, i) => <p className="skill-item" key={i}>{v.name}</p>)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skill
