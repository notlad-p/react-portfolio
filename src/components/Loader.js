import React, { useEffect, useRef } from 'react';
import { animated, useSpring, useChain } from 'react-spring';

// const letter = () => {
//   return (

//   )
// }

export default function Loader() {

  const rectRef = useRef();
  const rectSpring = useSpring({
    ref: rectRef,
    delay: 1000,
    h: 129,
    from: {
      h: 0,
    },
    config: {
      duration: 250,
    },
  });

  const circleRef = useRef();
  const circleSpring = useSpring({
    ref: circleRef,
    x: 0,
    from: {
      x: 1050,
    },
    config: {
      duration: 800,
    },
  });

  const semiCircleRef = useRef();
  const semiCircleSpring = useSpring({
    ref: semiCircleRef,
    to: async (next) => {
      await next({o: '1',});
      await next({
        d1: `${(2 * Math.PI * 175) / 2}`,
        d2: `${(2 * Math.PI * 195) / 2}`,
      });
      //await next({r: 'rotate(337.5)',});
    },
    from: {
      //r: 'rotate(-22.5)',
      o: '0',
      d1: '0',
      d2: '0',
    },
    config: {
      duration: 750,
    }
  });


  const containerRef = useRef();
  const containerSpring = useSpring({
    ref: containerRef,
    to: async (next) => {
      // await next({left: '0%'});
      // await next({opacity: 1});
      // await next({zIndex: 5});
      await next({left: '100%'});
      await next({opacity: 0});
      await next({zIndex: -1});
    },
    from: {
      left: '0%',
      opacity: 1, 
      zIndex: 5
    },
    config: {
      duration: 400,
    },
    delay: 250,
    onRest: () => {
      document.body.style.overflow = 'auto';
    }
  });

  useChain([rectRef, circleRef, semiCircleRef,containerRef]);

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, []);

  return (
    <animated.div 
      className='loader' 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...containerSpring
      }}
    >
      <animated.svg 
        height='200' 
        width='150' 
        fill='none'
        style={{
          transform: 'translateX(22.5%) scale(.5)',
          //transform: 'rotate(180deg) translateY(-50%)'
        }}
      >
        <animated.circle 
          cx='75' 
          cy='125' 
          r='60' 
          stroke='#007acc'
          strokeWidth='15'
          strokeLinecap='round'
          strokeDashoffset={circleSpring.x}
          strokeDasharray='1000'
        />
        <animated.rect 
          width='14.5'
          height={rectSpring.h}
          x='128'
          y='0'
          rx='8'
          ry='8'
          fill='#007acc'
          //fillOpacity='0.87'
        />
      </animated.svg> 
      <animated.svg 
        height='200' 
        width='150' 
        fill='none'
        style={{
          transform: 'rotate(180deg) translate(22.5%, -12.5%) scale(.5)',
        }}
      >
        <animated.rect 
          width='14.5'
          height={rectSpring.h}
          x='128'
          y='0'
          rx='8'
          ry='8'
          fill='#007acc'
          //fillOpacity='0.87'
        />
        <animated.circle 
          cx='75' 
          cy='125' 
          r='60' 
          stroke='#007acc'
          strokeWidth='15'
          strokeLinecap='round'
          strokeDashoffset={circleSpring.x}
          strokeDasharray='1000'
        />
      </animated.svg>
      <svg
        version='1.1'
        baseProfile='full'
        xmlns='http://www.w3.org/2000/svg'
        height='400'
        width='400'
        viewBox='0 0 400 400'
        fill='none'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -47.5%) scale(.5)',
        }}
      >
        <animated.circle 
          cx='200'
          cy='200'
          r='175'
          stroke='#29c7ac'
          strokeWidth='5'
          strokeLinecap='round'
          //strokeDasharray={semiCircleSpring.da1}
          strokeDasharray={`${(2 * Math.PI * 175) / 8}`}
          strokeDashoffset={semiCircleSpring.d1}
          strokeOpacity={semiCircleSpring.o}
          style={{
            transform: 'rotate(-22.5deg)',
            transformOrigin: 'center',
          }}
        />
        <animated.circle 
          cx='200'
          cy='200'
          r='195'
          stroke='#29c7ac'
          strokeWidth='5'
          strokeLinecap='round'
          //strokeDasharray={semiCircleSpring.da2}
          strokeDasharray={`${(2 * Math.PI * 195) / 8}`}
          strokeDashoffset={semiCircleSpring.d2}
          strokeOpacity={semiCircleSpring.o}
          style={{
            transform: 'rotate(22.5deg) scaleX(-1)',
            //transform: 'rotate(-22.5deg) scaleX(-1)',
            transformOrigin: 'center',
          }}
        />
      </svg>
    </animated.div>
  )
}