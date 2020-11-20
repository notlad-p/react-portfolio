import React, { useState } from 'react';
import { animated, useSpring, useTrail } from 'react-spring'

export default function Cursor() {
  const [hidden, setHidden] = useState(true);
  const [down, setDown] = useState(false);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const fast = { mass: 10, tension: 550, friction: 140 };
  const slow = { tension: 700, clamp: true };
  const trans = (x, y) => `translate3d(${x}px, ${y}px, 0) scale(${down ? '.925' : '1'})`;

  const [trail, set] = useTrail(2, () => ({
    xy: [0, 0],
    config: i => (i === 0 ? slow : fast),
  }));

  const cursorSpring = useSpring({
    opacity: hidden ? 0 : 0.87,
    backgroundGrey: down ? 'rgba(79, 78, 77, .9)' : 'rgba(79, 78, 77, .6)',
    backgroundGreen: down ? '#29c7ac' : 'rgba(0, 0, 0, 0)', 
    config: {
      tension: 300,
      friction: 15,
      clamp: true,
    }
  });

  const mouseMove = (e) => set({xy : [e.clientX, e.clientY]});

  const mouseLeave = () => {
    setHidden(true);
  }

  const mouseEnter = () => {
    setHidden(false);
  }

  const mouseDown = () => {
    setDown(true);
  }

  const mouseUp = () => {
    setDown(false);
  }

  return (
    <>
      {trail.map((props, index) => (
        <animated.div 
          className={ index === 0 ? 'cursorTwo' : 'cursor' }
          key={index}
          style={{
            transform: props.xy.interpolate(trans),
            display: isMobile ? 'none' : 'block',
            opacity: cursorSpring.opacity,
            backgroundColor: index === 0 ? cursorSpring.backgroundGreen : cursorSpring.backgroundGrey, 
          }} 
        />
      ))}
    </>
  )
}