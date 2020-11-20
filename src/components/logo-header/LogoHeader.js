import React, { useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import Effects from './Effects';
import Particles from './Particles';
import Semicircles from './Semicircles';
import Arrow from './Arrow';
import { Stars } from '@react-three/drei'; 

const Logo = ({ position, speed }) => {
  const color = '#007acc';
  const metalness = 0; //1  
  const roughness = 1; //0.3

  const logo = useRef();

  useFrame(() => {
    logo.current.rotation.x = logo.current.rotation.y += speed;
  });

  return (
    <group  
      ref={logo}
      position={position}
      scale={[.6, .6, .6]}
    >
      <group
        position={[-1.3, 0, 0]}
      >
        <mesh
          castShadow
        >
          <torusBufferGeometry args={[1, 0.2, 16, 100]} />
          
          <meshPhysicalMaterial 
            color={color}
            roughness={roughness}
            metalness={metalness}
            flatShading
          />
        </mesh>
        <mesh
          position={[.99, 1.1, 0]}
          castShadow
        >
          <cylinderBufferGeometry args={[0.2, 0.19, 2, 16]} />
          
          <meshPhysicalMaterial 
            color={color}
            roughness={roughness}
            metalness={metalness}
            flatShading
          />
        </mesh> 
        <mesh
          position={[.99, 2.1, 0]}
          castShadow
        >
          <sphereBufferGeometry args={[0.2, 16, 16]} />
          
          <meshPhysicalMaterial 
            color={color}
            roughness={roughness}
            metalness={metalness}
            flatShading
          />
        </mesh> 
      </group>
      <group
        position={[1.3, 0, 0]}
      >
        <mesh
          castShadow
        >
          <torusBufferGeometry args={[1, 0.2, 16, 100]} />
          
          <meshPhysicalMaterial 
            color={color}
            roughness={roughness}
            metalness={metalness}
            flatShading
          />
        </mesh>
        <mesh
          position={[-.99, -1.1, 0]}
          castShadow
        >
          <cylinderBufferGeometry args={[0.19, 0.2, 2, 16]} />
          
          <meshPhysicalMaterial 
            color={color}
            roughness={roughness}
            metalness={metalness}
            flatShading
          />
        </mesh> 
        <mesh
          position={[-.99, -2.1, 0]}
          castShadow
        >
          <sphereBufferGeometry args={[0.2, 16, 16]} />
          
          <meshPhysicalMaterial 
            color={color}
            roughness={roughness}
            metalness={metalness}
            flatShading
          />
        </mesh>
      </group>
    </group>
  )
}

export default function LogoHeader() {
  const [ mouseDown, setMouseDown ] = useState(false);

  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), []);

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  return (
    <div 
      className='logo-header'
      id='header'
    >
      <Canvas
        camera={{position: [0, 0, 5]}}
        onMouseUp={() => setMouseDown(false)}
        onMouseDown={() => setMouseDown(true)}
        onTouchStart={() => setMouseDown(true)}
        onTouchEnd={() => setMouseDown(false)}
        onMouseMove={onMouseMove}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          gl.setClearColor(new THREE.Color('#121212'));
       }}
      >
        <ambientLight />
        <spotLight 
          position={[0, 5, 10]}
          penumbra={1}
          castShadow
        />
        <Logo speed={isMobile ? .01 : .005} />
        <Semicircles speed={isMobile ? .01125 : .005} />
        <Arrow />
        <Particles 
          count={isMobile ? 100 : 200} // 200 & 50-75 on mobile 
          mouse={mouse}
        />
        <Effects mouseDown={mouseDown}   />
        <Stars 
          count={isMobile ? 500 : 1000} //500 on mobile
          factor={2}
        />
      </Canvas>
    </div>
  )
}