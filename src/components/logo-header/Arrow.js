import React, { useState, useRef, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

export default function Arrow() {
  const [hovered, setHovered] = useState(false);

  const arrowRef = useRef();

  const { positionY } = useSpring({
    positionY: hovered ? [0, -3.45, 0] : [0, -3.4, 0],
  });

  const [, setY ] = useSpring(() => ({ y: window.scrollY }));

  const onClick = () => {
    setY({
      y: window.innerHeight - 60,
      reset: true,
      from: { y: window.scrollY },
      onFrame: props => window.scroll(0, props.y),
    });
  }

  useFrame(() => {
    arrowRef.current.rotation.y += .005;
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'default'
  }, [hovered]);

  return (
    <a.group
      ref={arrowRef}
      position={positionY}
      rotation={[-.6, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
      scale={[.6, .6, .6]}
    >
      <mesh>
        <cylinderBufferGeometry
          args={[.2, 0, .25, 4]}
        />
        <meshPhysicalMaterial 
          color='#4F4E4D'
          roughness={1}
          flatShading
        />
      </mesh>
      <mesh
        position={[0, .3, 0]}
      >
        <cylinderBufferGeometry
          args={[.08, .08, .4, 4]}
        />
        <meshPhysicalMaterial 
          color='#4F4E4D'
          roughness={1}
          flatShading
        />
      </mesh>
      <mesh
        position={[0, .25, 0]}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhongMaterial 
          visible={false}
        />
      </mesh>
    </a.group>
  )
}