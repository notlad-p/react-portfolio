import React from 'react';
import Heading from './Heading';
import ProjectModal from './ProjectModal';
import useModal from '../hooks/useModal';
import githubIcon from '../assets/icons/github-white.png';
import rentACar from '../assets/imgs/projects/rentacar.JPG';
import pairMatching from '../assets/imgs/projects/pairmatching.JPG';
import dash from '../assets/imgs/projects/dash.JPG';
import iphoneCalc from '../assets/imgs/projects/iphone-calc.JPG';
import { Link } from 'phosphor-react';

const Project = ({ name, description, tech, githubLink, projectLink, title, image }) => {
  const { isShowing, toggle } = useModal();

  return (
    <div 
      className='project'
      onClick={toggle}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <ProjectModal 
        isShowing={isShowing}
        hide={toggle}
        name={name}
        image={image}
      />
      <div>
        <p 
          className='paragraph white-text' 
          style={{
            marginBottom: '16px',
          }}
        >
          {name}
        </p>
        <p className='paragraph-s grey-text'>
          {description}
        </p>
      </div>
      <div 
        className='project-footer'
      >
        <div className='project-footer-tech'>
          {tech.map((t, i) => {
            return (
              <span key={i} >{t}</span>
            )
          })}
        </div>
        <div className='project-footer-icons'>
          <a
            href={projectLink}
            target='_blank'
            rel="noopener noreferrer"
            onClick={toggle}
          >
            <Link
             size='28px'
             color='#ffffff'
           />
          </a>
          <a
            href={githubLink}
            target='_blank'
            rel="noopener noreferrer"
            onClick={toggle}
          >
            <img 
              src={githubIcon}
              alt='github link'
              style={{
                width: '28px',
                marginLeft: '10px'
              }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

const projectData = [
  {
    id: 1,
    name: 'Rent-a-Car', 
    description: 'Made up car rental site built in React, using the Material UI component library.', 
    image: rentACar,
    tech: ['React', 'SASS', 'Material UI',], 
    githubLink: 'https://github.com/notlad-p/rent-a-car', 
    projectLink: 'https://notlad-p.github.io/rent-a-car/'
  },
  {
    id: 2,
    name: 'Dash - New Tab Page', 
    description: 'Chrome new tab page extension with 3D backgrounds, current loaction weather, and time.', 
    image: dash,
    tech: ['ThreeJS', 'JSON',], 
    githubLink: 'https://github.com/notlad-p/dash', 
    projectLink: ''
  },
  {
    id: 3,
    name: 'Pair Matching Game', 
    description: 'A simple pair matching card game.', 
    image: pairMatching,
    tech: ['JavaScript', 'CSS', 'HTML',], 
    githubLink: 'https://github.com/notlad-p/pair-matching-game', 
    projectLink: 'https://notlad-p.github.io/pair-matching-game/'
  },
  {
    id: 4,
    name: 'iPhone Calculator Clone', 
    description: 'An iPhone calculator clone with current time', 
    image: iphoneCalc,
    tech: ['JavaScript', 'CSS', 'HTML',], 
    githubLink: 'https://github.com/notlad-p/iphone-calculator', 
    projectLink: 'https://notlad-p.github.io/iphone-calculator/'
  },
  
]

export default function Projects() {
  return (
    <div
      className='section' 
      id='projects'
    >
      <Heading 
        text='Projects'
        color='#29C7AC'
        width='125px'
      />
      <div className='projects' >
        {projectData.map(project => {
          return (
            <Project 
              key={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
              tech={project.tech}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
            />
          )
        })}
      </div>
    </div>
  )
}