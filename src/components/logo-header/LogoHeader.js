import React, { useRef, useCallback } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Particles from "./Particles";
import Arrow from "./Arrow";
import { Stars } from "@react-three/drei";

export default function LogoHeader() {
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return (
    <div className="logo-header" id="header">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        onMouseMove={onMouseMove}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          gl.setClearColor(new THREE.Color("#121212"));
        }}
      >
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <Arrow />
        <Particles count={isMobile ? 50 : 100} mouse={mouse} />
        <Stars count={isMobile ? 500 : 1000} factor={2} />
      </Canvas>
    </div>
  );
}