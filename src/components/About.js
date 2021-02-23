import React from 'react';
import Heading from './Heading';
import Button from './Button';
import { Link } from 'react-scroll';
import useWindowWidth from '../hooks/useWindowWidth';

export default function About() {
  const { width } = useWindowWidth();

  return (
    <div 
      className='section'
      id='about'
    >
      <Heading 
        text="Hello, I'm Dalton"
        color='#007ACC'
        width='250px'
      />
      <p className='paragraph grey-text' >
        I'm a developer who enjoys building clean and interactive web apps.
      </p>

      <Link
        to='projects'
        smooth={true}
        offset={width < 800 ? -120 : 0}
      >
        <Button text='Projects' />
      </Link>
    </div>
  )
}