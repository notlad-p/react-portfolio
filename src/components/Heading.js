import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Heading({ text, color, width }) {
  const [underlineRef, underlineInView] = useInView({
    triggerOnce: true,
    rootMargin: '-10% 0%',
  });

  const spring = useSpring({
    from: { 
      underlineWidth: '0px',
    },
    underlineWidth: underlineInView ? width : '0px',
  });

  return (
    <>
      <h2 
        className='heading-text'
      >
        {text}
      </h2>
      <animated.div
        ref={underlineRef}
        className='heading-underline'
        style={{
          backgroundColor: color,
          boxShadow: `0px 0px 10px ${color}`,
          width: spring.underlineWidth,
        }}
      >
      </animated.div>
    </>
  )
}