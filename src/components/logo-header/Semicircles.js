import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Semicircle = ({ direction, radius, arc, rotation, speed }) => {
  const semiRef = useRef();
  
  useFrame(() => {
    semiRef.current.rotation.z += speed * direction;
  });

  return (
    <mesh
      ref={semiRef}
      rotation={[0, 0, rotation]}
    >
      <torusBufferGeometry args={[radius, .025, 3, 32, arc]} />
      <meshPhysicalMaterial 
        color='#1f9783'
      />
    </mesh>
  )

}

export default function Semicircles({ speed }) {
  return (
    <group
      rotation={[0, 0, Math.PI / 3]}
    >
      <Semicircle 
        direction={-1}
        radius={2}
        arc={Math.PI / 3} 
        rotation={0}
        speed={speed}
      />
      <Semicircle 
        direction={-1}
        radius={2}
        arc={Math.PI / 3} 
        rotation={Math.PI}
        speed={speed}
      />
      <Semicircle 
        direction={-1}
        radius={2}
        arc={Math.PI / 3} 
        rotation={Math.PI - Math.PI / 2}
        speed={speed}
      />
      <Semicircle 
        direction={-1}
        radius={2}
        arc={Math.PI / 3} 
        rotation={Math.PI + Math.PI / 2}
        speed={speed}
      />
      <Semicircle 
        direction={1}
        radius={2.2}
        arc={Math.PI / 3} 
        rotation={0}
        speed={speed}
      />
      <Semicircle 
        direction={1}
        radius={2.2}
        arc={Math.PI / 3} 
        rotation={Math.PI}
        speed={speed}
      />
      <Semicircle 
        direction={1}
        radius={2.2}
        arc={Math.PI / 3} 
        rotation={Math.PI - Math.PI / 2}
        speed={speed}
      />
      <Semicircle 
        direction={1}
        radius={2.2}
        arc={Math.PI / 3} 
        rotation={Math.PI + Math.PI / 2}
        speed={speed}
      />
    </group>
  )
}