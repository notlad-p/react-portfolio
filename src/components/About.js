import React from 'react';
import Heading from './Heading';
import Button from './Button';

export default function About() {

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
      <Button 
        text='Resume'
      />
    </div>
  )
}