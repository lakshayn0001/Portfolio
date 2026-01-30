import React from 'react'
import './Tech.css'

const information = [
  {
    work: 'Software Integrator Developer',
    company: 'Open Access Technology India Pvt. Ltd.',
    info: 'Worked on automation, CI/CD pipelines, and backend integrations.',
    date: 'Jan 2026',
    url:'https://drive.google.com/file/d/1v0Pozmmiw6QNzA7f3x8baRuBGughBPoc/view?usp=sharing'
  },
  {
    work: 'Intern Educator',
    company: 'Geekster',
    info: 'Mentored students in full stack development fundamentals.',
    date: 'Jun 2022',
    url:'https://drive.google.com/file/d/1rsVBAD43JQncRFX5xs_6V71Au6KGY20u/view?usp=sharing'
  }
]

const Tech = () => {
  return (
    <div className='tech_main'>
      <div id='titlepart'>
        <h1>My Journey & Milestones</h1>
      </div>

      <div id='informationpart'>
        {information.map((value, index) => (
          <a href={value.url}>
          <div className='parts' key={index}>
            <div className='top'>
              <h3>{value.work}</h3>
              <span className='date'>{value.date}</span>
            </div>

            <p className='company'>{value.company}</p>
            <p className='info'>{value.info}</p>
          </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Tech
