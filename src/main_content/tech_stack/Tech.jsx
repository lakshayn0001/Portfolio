import React from 'react';
import './Tech.css';

const information = [
  {
    work: 'Software Developer – Integration',
    company: 'Open Access Technology India Pvt. Ltd.',
    info: 'Engineered backend integrations, automated enterprise workflows, and optimized application performance and reliability.',
    date: 'Apr 2023 - Jan 2026',
    url: 'https://drive.google.com/file/d/1V3WUaI4ASQmF7MOENCaoWenCwt1-78oX/view?usp=sharing'
  },
  {
    work: 'Intern Educator',
    company: 'Geekster',
    info: 'Mentored aspiring developers in modern JavaScript, React, and backend architecture while leading technical problem-solving sessions.',
    date: 'Jun 2022 - Aug 2022',
    url: 'https://drive.google.com/file/d/1rsVBAD43JQncRFX5xs_6V71Au6KGY20u/view?usp=sharing'
  }
];

const Tech = () => {
  return (
    <section className='tech_main' id='tech_main'>
      <div id='titlepart'>
        <span className='section_badge'>CAREER</span>
        <h1>My Journey & Experience</h1>
        <p>Professional milestones, engineering contributions, and education</p>
      </div>

      <div id='informationpart'>
        {information.map((value, index) => (
          <a 
            href={value.url} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='parts'
          >
            <div className='parts_header'>
              <div>
                <h3 className='role_title'>{value.work}</h3>
                <p className='company_name'>{value.company}</p>
              </div>
              <span className='date_badge'>{value.date}</span>
            </div>

            <p className='role_info'>{value.info}</p>

            <div className='verify_link'>
              <span>View Credential</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Tech;
