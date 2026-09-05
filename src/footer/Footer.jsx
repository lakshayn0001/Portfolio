import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='main_footer' id='footer'>
      <div className='footer_container'>
        <p className='footer_copy'>
          © {currentYear} Lakshay Nagpal. Crafted with clean code and modern design.
        </p>

        <div className='footer_links'>
          <a 
            href="https://github.com/lakshayn0001" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer_link"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/lakshay-nagpal-1a2a0134a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer_link"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:Lakshayn0001@gmail.com" 
            className="footer_link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
