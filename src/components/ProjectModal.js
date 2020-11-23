import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSpring, animated } from 'react-spring';
import { Link } from 'phosphor-react'
import githubIcon from '../assets/icons/github-white.png';
import Button from './Button';

const ProjectModal = ({ isShowing, hide, name, image, projectLink, githubLink }) => {
  const [render, setRender] = useState(isShowing);

  const onAnimationEnd = () => {
    if (!isShowing) setRender(false)
  }

  const spring = useSpring({
    opacity: isShowing ? 1 : 0,
    onRest: onAnimationEnd,
  });

  useEffect(() => {
    if (isShowing) setRender(true);
  }, [isShowing]);

  return (
    render ? createPortal(
      <>
        <animated.div 
          className='project-modal' 
          style={spring} 
          onAnimationEnd={onAnimationEnd}
        >
          <div 
            className='project-modal-content' 
            onClick={hide}
          >
            <div 
              className='project-modal-close' 
              onClick={hide}
            >
              <span></span>
              <span></span>
            </div>
            <h2 className='project-modal-heading text-white' >{name}</h2>
            <div className='project-modal-mid' >
              <img
                className='project-modal-img'
                src={image}
                alt='project'
              />
              <p 
                className='project-modal-description' 
              >
                Detailed description
              </p>
            </div>
            <div className='project-modal-btns' >
              <Button 
                text='Live Project'
                link
                href={projectLink}
                icon={<Link
                  size='20px'
                  color='#ffffff'
                  style={{
                    marginLeft: '8px'
                  }}
                />}
              />
              <Button 
                text='GitHub'
                link
                href={githubLink}
                icon={
                  <img 
                    src={githubIcon}
                    alt='github link'
                    style={{
                      width: '20px',
                      marginLeft: '8px'
                    }}
                  />
                }
              />
            </div>
          </div>
        </animated.div>
      </>, document.body
    ) : null
  )
}
  

export default ProjectModal;