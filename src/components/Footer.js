import React from 'react';
import { Envelope } from 'phosphor-react';
import githubIcon from '../assets/icons/github-white.png';
import linkedInIcon from '../assets/icons/linkedin-white.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div 
      className='section'
    >
      <div
        className='footer-icons'
      >
        <a
          href='mailto:daperkins123@gmail.com'
          target='_blank'
          rel="noopener noreferrer"
          className='footer-link'
        >
          <Envelope 
            size='36px'
            color='rgba(255, 255, 255, 0.87)'
            className='footer-icon'
          />
        </a>
        <a
          href='https://github.com/notlad-p'
          target='_blank'
          rel="noopener noreferrer"
          className='footer-link'
        >
          <img 
            src={githubIcon}
            alt='Github link'
            className='footer-icon'
          />
        </a>
        <a
          href='https://github.com/'
          target='_blank'
          rel="noopener noreferrer"
          className='footer-link'
        >
          <img 
            src={linkedInIcon}
            alt='LinkedIn link'
            className='footer-icon'
          />
        </a>
      </div>
      
      <p className='footer-p'>
        Dalton Perkins
        <span> &copy; </span> 
        {year}
      </p>
    </div>
  )
}