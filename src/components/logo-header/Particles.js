import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';

// Particles
  // ref: https://codesandbox.io/embed/r3f-sparks-sbf2i
  // Random locations in a floating motion
  // Move slightly with mouse

export default function Particles({ count, mouse }) {
  const mesh = useRef();

  const particlesObject = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      // random x, y, z position
        // between -3 and 3
        // Math.random() * 6 - 3
      const x = Math.random() * 6 - 3;
      const y = Math.random() * 6 - 3;
      const z = Math.random() * 6 - 3;
      // standard speed
      const speed = 0.01 + Math.random() / 200;
      const timing = Math.random() * 100;
      arr.push({x, y, z, speed, timing, mouseX: 0, mouseY: 0});
    }
    return arr;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, index) => {
      let { x, y, z, speed, timing } = particle;

      // update particle position
      timing = particle.timing += speed / 8

      particle.mouseX += (mouse.current[0] - particle.mouseX) * .01;
      particle.mouseY += (-mouse.current[1] - particle.mouseY) * .01;

      particlesObject.position.set(
        (x + -Math.cos(timing) * 2) + (particle.mouseX / 10) * (Math.sin(timing) / 20),
        (y + Math.tan(timing) * 2) + (particle.mouseY / 10) * (Math.sin(timing) / 20),
        (z + -Math.sin(timing) * 2)
      );

      const r = Math.cos(timing) * Math.sin(timing) * 5;

      particlesObject.rotation.set(r, r, r);

      particlesObject.updateMatrix();

      mesh.current.setMatrixAt(index, particlesObject.matrix)
    });

    mesh.current.instanceMatrix.needsUpdate = true
  });
  
  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry 
          attach="geometry" 
          args={[0.025, 0]} 
        />
        
        <meshPhongMaterial 
          attach="material" 
          color='#4F4E4D'
        />
      </instancedMesh>
    </>
  )
}